var express = require("express");
var router = express.Router();
const db = require("../model/helper");

router.get("/", async (req, res) => {
  //Woking on frontend. Connected to Homegrid
  try {
    let results = await db("SELECT * FROM books ORDER BY id ASC;");
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.get("/:id", async (req, res, next) => {
  //updated, untested. Should connect to a new component Bfeat (adapted from Cfeat)
  let id = req.params.id;
  try {
    let result = await db(`SELECT * FROM books WHERE  id = ${id}`);
    if (result.data.length === 1) {
      res.send(result.data);
    } else {
      res.status(404).send({ error: err.message }, "***else");
    }
  } catch (err) {
    res.status(404).send({ error: err.message }, "***catch");
  }
});

router.post("/", async (req, res) => {
  //working from thunder client. Should connect to a new component Bform (adapted from Cform)
  let {
    picture,
    extra_pic,
    genre,
    date_purchase,
    price,
    shop,
    publisher,
    new_or_not,
    read_or_not,
    title,
    author,
    date_publish,
    more_from_author,
    feeling,
    upgrade,
    notes,
  } = req.body;

  let sql = `
  INSERT INTO books ( picture, extra_pic, genre, date_purchase, price, shop, publisher, 
  new_or_not, read_or_not, title, author, date_publish, more_from_author, feeling, upgrade, notes)
  VALUES ('${picture}','${extra_pic}','${genre}','${date_purchase}', ${price},'${shop}','${publisher}',
  ${new_or_not},${read_or_not},'${title}','${author}','${date_publish}', ${more_from_author}, ${feeling}, ${upgrade},'${notes}');
  `;

  try {
    await db(sql);

    let result = await db("SELECT * FROM books");

    res.send(result.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  //updated, untested. Should connect to new component Bfeat and take to a prefilled Bform.
  let id = req.params.id;
  try {
    let result = await db(`SELECT * FROM books WHERE  id = ${id}`);
    if (result.data.length === 1) {
      let {
        picture,
        extra_pic,
        genre,
        date_purchase,
        price,
        shop,
        publisher,
        new_or_not,
        read_or_not,
        title,
        author,
        date_publish,
        more_from_author,
        feeling,
        upgrade,
        notes,
      } = req.body;
      let sql = `UPDATE books
     SET picture= '${picture}', extra_pic= '${extra_pic}', genre= '${genre}',date_purchase= '${date_purchase}', 
      price= ${price}, shop= '${shop}', publisher= '${publisher}', new_or_not= ${new_or_not}, read_or_not = ${read_or_not}, 
      title= '${title}', author= '${author}', date_publish= '${date_publish}', more_from_author = ${more_from_author} feeling= ${feeling}, upgrade= ${upgrade}, notes= '${notes}' 
      WHERE id = ${id}
    `;

      await db(sql);
      result = await db("SELECT * FROM books");
      res.send(result.data);
    } else {
      res.status(404).send({ error: err.message });
    }
  } catch (err) {
    res.status(404).send({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  //updated, untested. should connect to new component Bfeat, simple button.
  let id = req.params.id;
  try {
    let result = await db(`SELECT * FROM books WHERE  id = ${id}`);

    if (result.data.length === 1) {
      await db(`DELETE FROM books WHERE id = ${id}`);
      result = await db("SELECT * FROM books");
      res.send(result.data);
    } else {
      res.status(404).send({ error: "Item not found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});
module.exports = router;
