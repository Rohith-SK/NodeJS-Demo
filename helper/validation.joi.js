const Joi = require("joi");
const joi = require("joi");

const registerValidation = joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .lowercase()
    .required(),
  userName: Joi.string().alphanum().min(3).max(30).required(),

  password: Joi.string()
    .pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
    .required(),
  number: Joi.string()
    .pattern(/^[0-9\w+]{13}$/)
    .messages({
      "string.pattern.base":
        'Phone number format  must be  "+countrycode-10 digits".',
    })
    .required(),
});

module.exports = registerValidation;
