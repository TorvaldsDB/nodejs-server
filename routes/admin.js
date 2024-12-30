const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", { docTitle: "Add product" });
});

router.post("/product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

// module.exports = router;

exports.routes = router;
exports.products = products;
