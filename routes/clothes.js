var express = require("express");
var router = express.Router();
const db = require("../model/helper");
//Wed, 23 Feb 2022 11:24:14 GMT express deprecated res.send(status, body): Use res.status(status).send(body) instead at routes\clothes.js:111:21
//node:internal/errors:464
//  ErrorCaptureStackTrace(err);

router.get("/", async (req, res) => {
  //this seems to work through postman, with info too!
  try {
    let results = await db("SELECT * FROM clothes ORDER BY id ASC;");

    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.get("/:id", async (req, res, next) => {
  //works!
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
  //had an ugly syntax error because condition was a protected word, changed it to ready_to_use
  //got rid of id here, Sofia told me it's autoincrement.
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

  //THIS one worked in MySql, I changed condition now to ready_to_use
  //INSERT INTO clothes ( picture, extra_pic, closet_section, date_purchase, price, shop, brand, season, new_or_not, ready_to_use, materials, wash_sched, wash_info, feeling, upgrade, notes) VALUES ('whateverpic', 'extrapic','tops','2000-10-10', 20,'zara','zara','winter', 1, 1,'cotton','never','none', 5, 1,'sick of this');

  try {
    await db(sql);

    let result = await db("SELECT * FROM clothes");

    res.send(result.data);
  } catch (err) {
    res.status(500).send({ error: err.message }, "***on catch");
  }
});

router.put("/:id", async (req, res) => {
  let id = req.params.id; //It works through postman!
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
      `; //that WHERE is important, otherwise everything will be substituted for the new data.

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

router.delete("/", async (req, res) => {
  //no idea if I really need to add all of the fields here
  //giving me problems <pre>Cannot DELETE /clothes/3</pre>
  let id = req.params.todo_id;
  try {
    let result = await db(`SELECT * FROM clothes WHERE  id = ${id}`);

    if (result.data.length === 1) {
      let {
        id,
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
