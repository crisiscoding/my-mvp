var express = require("express");
var router = express.Router();
const db = require("../model/helper");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//should work, shows responds with a resource in postman :(

router.get("/", async (req, res) => {
  try {
    let result = await db("SELECT * FROM books ORDER BY id ASC;").then(
      (results) => {
        res.send(results.data);
      }
    );
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});
//works!
router.get("/:id", async (req, res, next) => {
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

// DUMMY DATA
//INSERT INTO books ( picture, extra_pic, genre, date_purchase, price, shop, publisher, new_or_not, read_or_not, title, author, date_publish, more_from_author, feeling, upgrade, notes)
//VALUES ('bookpic2', 'extrabookpic','comedy','2015-10-10', 12,'Pasajes','OUP', 1, 1,'My first book','Cristina','1984-10-10', 1, 5, 1,'hope this works');

router.post("/", async (req, res) => {
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
  new_or_not, read_or_not, title, author, date_publish, more_from_author, feeling, upgrade, notes,)
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

//updated, untested

router.put("/", async (req, res) => {
  let id = req.params.todo_id;
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
//not doing until clothes delete works
router.delete("/", async (req, res) => {
  let id = req.params.todo_id;
  try {
    let result = await db(`SELECT * FROM books WHERE  id = ${id}`);

    if (result.data.length === 1) {
      let { text, complete } = req.body;

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
