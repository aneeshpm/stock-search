const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
};

const searchStocksValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  return schema.validate(data);
};

const searchStocksWithIdValidation = (data) => {
  const schema = Joi.object({
    id: Joi.number().required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.searchStocksValidation = searchStocksValidation;
module.exports.searchStocksWithIdValidation = searchStocksWithIdValidation;
