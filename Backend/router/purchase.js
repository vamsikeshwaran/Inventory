const express = require("express");
const app = express();
const purchase = require("../controller/purchase");


app.post("/add", purchase.addPurchase);


app.get("/get/:userID", purchase.getPurchaseData);

app.get("/get/:userID/totalpurchaseamount", purchase.getTotalPurchaseAmount);

module.exports = app;


