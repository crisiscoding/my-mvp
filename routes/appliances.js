var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ title: "whatever appliances" });
  //res.render('index', { title: 'Express' });
});
//should work
router.get("/", async (req, res) => {
  try {
    let result = await db("SELECT * FROM appliances ORDER BY id ASC;").then(
      (results) => {
        res.send(results.data);
      }
    );
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});
//should work
router.get("/:id", async (req, res, next) => {
  let id = req.params.id;
  try {
    let result = await db(`SELECT * FROM appliances WHERE  id = ${id}`);
    if (result.data.length === 1) {
      res.send(result.data);
    } else {
      res.status(404).send({ error: err.message });
    }
  } catch (err) {
    res.status(404).send({ error: err.message });
  }
});
//updated, untested
router.post("/", async (req, res) => {
  let {
    picture,
    extra_pic,
    section,
    date_purchase,
    price,
    shop,
    brand,
    new_or_not,
    link_to_manual,
    years_of_warranty,
    feeling,
    upgrade,
    notes,
  } = req.body;

  let sql = `
  INSERT INTO appliances (picture, extra_pic, section, date_purchase, price, 
    shop, brand, new_or_not, link_to_manual, years_of_warranty, feeling, upgrade, notes)
    VALUES ('${picture}','${extra_pic}','${section}','${date_purchase}', ${price},'${shop}','${brand}',${new_or_not},${link_to_manual},'${years_of_warranty}', ${feeling}, ${upgrade}, '${notes}');
  `;
  try {
    await db(sql);

    let result = await db("SELECT * FROM appliances");

    res.send(result.data);
  } catch (err) {
    res.status(500).send({ error: err.message }, "***on catch");
  }
});
//updated, untested
router.put("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let result = await db(`SELECT * FROM appliances WHERE id = ${id}`);
    if (result.data.length === 1) {
      let {
        picture,
        extra_pic,
        section,
        date_purchase,
        price,
        shop,
        brand,
        new_or_not,
        link_to_manual,
        years_of_warranty,
        feeling,
        upgrade,
        notes,
      } = req.body;

      let sql = `
     UPDATE appliances
      SET picture= '${picture}', extra_pic= '${extra_pic}', section= '${section}',date_purchase= '${date_purchase}', 
      price= ${price}, shop= '${shop}', brand= '${brand}', new_or_not= ${new_or_not}, link_to_manual= '${link_to_manual}', 
      years_of_warranty= ${years_of_warranty}, feeling= ${feeling}, upgrade= ${upgrade}, notes= '${notes}' 
      WHERE id = ${id} 
    `;

      await db(sql);
      result = await db("SELECT * FROM appliances");
      res.send(result.data);
    } else {
      res.status(404).send({ error: err.message });
    }
  } catch (err) {
    res.status(404).send({ error: err.message });
  }
});
//not doing this until clothes delete works
router.delete("/", async (req, res) => {
  let id = req.params.todo_id;
  try {
    let result = await db(`SELECT * FROM appliances WHERE  id = ${id}`);

    if (result.data.length === 1) {
      let { text, complete } = req.body; //update this too!!!!

      await db(`DELETE FROM appliances WHERE id = ${id}`);
      result = await db("SELECT * FROM appliances");
      res.send(result.data);
    } else {
      res.status(404).send({ error: "Item not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});
module.exports = router;
