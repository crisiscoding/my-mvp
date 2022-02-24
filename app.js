var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
var appliancesRouter = require("./routes/appliances");
var booksRouter = require("./routes/books");
var clothesRouter = require("./routes/clothes");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use("/appliances", appliancesRouter);
app.use("/books", booksRouter);
app.use("/clothes", clothesRouter);

module.exports = app;
