var express = require("express");
var router = express.Router();
let product = require('../models/producto');


router.get("/", async (req, res, next) => {
    const findAllProducts = await product.find();
    res.json(findAllProducts);
});


router.get("/:id", async (req, res, next) => {
    const findOneProducto = await product.findById(req.params.id);
    res.json(findOneProducto);
});


router.post("/", async (req, res, next) => {
    const createProduct = await product.create(req.body);
    res.json(createProduct);
});


router.put("/:id", async (req, res, next) => {
    const updateProduct = await product.findByIdAndUpdate(req.params.id, req.body)
    res.json(updateProduct);
});


router.delete("/:id", async (req, res, next) => {
    const deleteProduct = await product.findByIdAndDelete(req.params.id);
    res.json(deleteProduct);
});


module.exports = router;
