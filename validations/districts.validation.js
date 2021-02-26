const Catcher = require("../middlewares/async");
const Joi = require("@hapi/joi");
const _ = require("ssv-utils");

const districtsValidator = {
  create: Catcher(
    async (req, res, next) => {
      const body = req.body;
      const schema = Joi.object({
        key: Joi.string().required(),
      });
      await schema.validateAsync(req.body);
    },
    { error_code: 400 }
  ),
};

module.exports = districtsValidator;
