const validation = require("../helper/validation.joi");
const { statusResponses } = require("../util/static.util");

exports.registerJoiValidator = async (req, res, next) => {
  try {
    const { value, error } = await validation.validate(req.body, {
      abortEarly: false,
    });
    next();
    if (error) {
      // throw { ...statusResponses.BAD_RQST, message: error.message };
      console.log(error.message);
    }
  } catch (error) {
    console.log(error);
  }
};
