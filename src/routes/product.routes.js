const express = require("express");

const ProductController = require("../controllers/product.controller");

const ProductRouter = express.Router();

// ProductRouter.get("/",ProductController.test);

ProductRouter.post("/add", ProductController.addProduct);

ProductRouter.get("/", ProductController.getAllProducts);

ProductRouter.get("/search/:productId/", ProductController.getProductById);

ProductRouter.get("/category", ProductController.getProductByCategory);

module.exports = ProductRouter;