const validation = require("../helper/validation.joi");

exports.registerJoiValidator = async (req, res, next) => {
  try {
    const { value, error } = await validation.validate(req.body);
    next();
  } catch (error) {
    console.log(error);
  }
};
