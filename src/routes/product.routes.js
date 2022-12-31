const express = require("express");

const ProductController = require("../controllers/product.controller");

const ProductRouter = express.Router();

ProductRouter.get("/",ProductController.test);




module.exports = ProductRouter;