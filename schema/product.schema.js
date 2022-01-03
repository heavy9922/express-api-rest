const joi = require('joi');

const id = joi.string().uuid();
const name = joi.string().min(3).max(15);
const price = joi.number().integer().min(10);
const imagen = joi.string().uri();

const createProductSchema = joi.object({
  name: name.required(),
  price: price.required(),
  imagen: imagen.required(),
});

const updateProductSchema = joi.object({
  price: price,
  name: name,
  imagen: imagen
});

const getProductSchema = joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
