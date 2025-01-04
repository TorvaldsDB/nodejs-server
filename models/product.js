const products = [];

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    // const db = require("../util/database");
    // return db.execute(
    //   "INSERT INTO products (title, imageUrl, description, price) VALUES (?, ?, ?, ?)",
    //   [this.title, this.imageUrl, this.description, this.price]
    // );

    products.push(this);
  }

  static fetchAll() {
    // const db = require("../util/database");
    // return db.execute("SELECT * FROM products");
    return products;
  }
};
