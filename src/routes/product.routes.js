const express = require("express");

const ProductController = require("../controllers/product.controller");

const ProductRouter = express.Router();

ProductRouter.post("/app-events", ProductController.subscribeEvents); 

ProductRouter.post("/add", ProductController.addProduct);

ProductRouter.get("/", ProductController.getAllProducts);

ProductRouter.get("/search/:productId/", ProductController.getProductById);

ProductRouter.get("/category", ProductController.getProductByCategory);

ProductRouter.get("/test_customer_events", ProductController.test);

module.exports = ProductRouter;