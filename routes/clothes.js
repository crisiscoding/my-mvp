var express = require("express");
var router = express.Router();
const db = require("../model/helper");

router.get("/", async (req, res) => {
  //connected to App, Cgrid
  try {
    let results = await db("SELECT * FROM clothes ORDER BY id ASC;");

    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.get("/:id", async (req, res, next) => {
  //connected to Cfeat
  let id = req.params.id;
  try {
    let result = await db(`SELECT * FROM clothes WHERE  id = ${id}`);
    if (result.data.length === 1) {
      res.send(result.data);
    } else {
      res.status(404).send({ error: err.message });
    }
  } catch (err) {
    res.status(404).send({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  //connected to App, Cform
  let {
    picture,
    extra_pic,
    closet_section,
    date_purchase,
    price,
    shop,
    brand,
    season,
    new_or_not,
    ready_to_use,
    materials,
    wash_sched,
    wash_info,
    feeling,
    upgrade,
    notes,
  } = req.body;

  let sql = `
  INSERT INTO clothes ( picture, extra_pic, closet_section, date_purchase, price, shop, brand, season, 
    new_or_not, ready_to_use, materials, wash_sched, wash_info, feeling, upgrade, notes) 
    VALUES ('${picture}','${extra_pic}','${closet_section}','${date_purchase}', ${price},'${shop}','${brand}','${season}',${new_or_not},${ready_to_use},'${materials}','${wash_sched}','${wash_info}', ${feeling},${upgrade},'${notes}');
  `;

  try {
    await db(sql);

    let result = await db("SELECT * FROM clothes");

    res.send(result.data);
  } catch (err) {
    res.status(500).send({ error: err.message }, "***on catch");
  }
});

router.put("/:id", async (req, res) => {
  //It works through postman. Not implemented on frontend yet. Should connect to Cfeat and take to a prefilled Cform.
  let id = req.params.id;
  try {
    let result = await db(`SELECT * FROM clothes WHERE  id = ${id}`);
    if (result.data.length === 1) {
      let {
        picture,
        extra_pic,
        closet_section,
        date_purchase,
        price,
        shop,
        brand,
        season,
        new_or_not,
        ready_to_use,
        materials,
        wash_sched,
        wash_info,
        feeling,
        upgrade,
        notes,
      } = req.body;

      let sql = `UPDATE clothes 
      SET picture= '${picture}', extra_pic= '${extra_pic}', closet_section= '${closet_section}',date_purchase= '${date_purchase}', 
      price= ${price}, shop= '${shop}', brand= '${brand}', season= '${season}', new_or_not= ${new_or_not}, ready_to_use= ${ready_to_use}, 
      materials= '${materials}', wash_sched= '${wash_sched}', wash_info= '${wash_info}', feeling= ${feeling}, upgrade= ${upgrade}, notes= '${notes}' 
      WHERE id = ${id} 
      `;

      await db(sql);
      result = await db("SELECT * FROM clothes");
      res.send(result.data);
    } else {
      res.status(404).send("*****else in put", { error: err.message });
    }
  } catch (err) {
    res.status(404).send("*****catch in put", { error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  //It works through postman. Not implemented on frontend yet. Should connect to Cfeat, simple botton prob.

  let id = req.params.id;
  try {
    let result = await db(`SELECT * FROM clothes WHERE  id = ${id}`);

    if (result.data.length === 1) {
      await db(`DELETE FROM clothes WHERE id = ${id}`);
      result = await db("SELECT * FROM clothes");
      res.send(result.data);
    } else {
      res
        .status(404)
        .send({ error: "Item not found, there is nothing with that id" });
    }
  } catch (err) {
    res.status(500).send("catch error on delete", { error: err.message });
  }
});

module.exports = router;
