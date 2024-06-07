const express = require("express");
const app = express();
const store = require("../controller/store");


app.post("/add", store.addStore);


app.get("/get/:userID", store.getAllStores)

module.exports = app;
