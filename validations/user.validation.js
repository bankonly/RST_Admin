const Catcher = require("../middlewares/async");
const UserModel = require("model/models/user.model");
const Joi = require("@hapi/joi");
const Mongo = require("../utils/mongo-query");
const { _, RemoveSpace } = require("../utils/common-func");

const UserValidator = {
  register: Catcher(
    async (req, res, next) => {
      const schema = Joi.object({
        email: Joi.string().required().email().trim(),
        password: Joi.string().required().min(5),
        confirm_password: Joi.any().valid(Joi.ref("password")).required(),
        first_name: Joi.string().min(6).required(),
        last_name: Joi.string().min(6).required(),
        phone: Joi.string().min(8).required(),
      });
      await schema.validateAsync(req.body);

      req.body.email = _.removeSpace(req.body.email);

      await Mongo.findExist(UserModel, { condition: { email: req.body.email }, key: "email" });
      await Mongo.findExist(UserModel, { condition: { phone: req.body.phone }, key: "phone" });
      await Mongo.findExist(UserModel, { condition: { first_name: req.body.first_name }, key: "first_name" });

      next();
    },
    { error_code: 400 }
  ),
  login: Catcher(
    async (req, res, next) => {
      const body = req.body;
      const schema = Joi.object({
        phone: Joi.string().required().max(8).trim(),
        password: Joi.string().required().min(5),
      });

      await schema.validateAsync(body);

      const found_user = await Mongo.find(UserModel, {
        error_code: 400,
        throw_error: true,
        many: false,
        condition: { $or: [{ phone: body.phone }, { email: body.phone }] },
      });
      const verfify_password = await _.bcryptFn.verifyPassword(body.password, found_user.password);
      if (!verfify_password) throw new Error(`400::invalid password`);

      body.found_user = found_user;
      next();
    },
    { error_code: 400 }
  ),
  changePassword: Catcher(
    async (req, res, next) => {
      const body = req.body;
      const schema = Joi.object({
        password: Joi.string().required().min(5),
        new_password: Joi.string().required().min(5),
        confirm_password: Joi.any().valid(Joi.ref("new_password")).required(),
      });
      await schema.validateAsync(body);
      next();
    },
    { error_code: 400 }
  ),
};

module.exports = UserValidator;
