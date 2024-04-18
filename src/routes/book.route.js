const express = require("express");
const routerBook = express.Router();

const { createBook, getBook } = require("../controllers/book.controller.js");

routerBook.post("/books/:user_id", createBook);
routerBook.get("/books/:user_id", getBook);

module.exports = routerBook;
