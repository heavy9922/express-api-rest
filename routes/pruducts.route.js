const express = require('express');
const ProductsServices = require('../services/products.services');

const router = express.Router();
const services = new ProductsServices();

router.get('/', async (req, res) => {
  const products = await services.find();
  res.json(products);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const products = await services.findOne(id);
  res.json(products);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await services.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await services.update(id, body);
    res.json(product);
  } catch (e) {
    res.status(404).json({
      message: e.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await services.delete(id);
  res.json(rta);
});

module.exports = router;
