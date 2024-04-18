const express = require("express");
const routerUser = express.Router();

const { createUser, getUser } = require("../controllers/user.controller.js");

routerUser.post("/users", createUser);
routerUser.get("/users/:id", getUser);

module.exports = routerUser;
