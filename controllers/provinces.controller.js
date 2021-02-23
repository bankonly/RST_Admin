const Catcher = require("../middlewares/async");
const { Res } = require("../utils/common-func");
const { provinces } = require('../seeders/province.json')
const ProvinceModel = require('../models/provinces.model')
const ProvincesController = {
  list: Catcher(async (req, res) => {
    const resp = new Res(res);
    const items = await ProvinceModel.find({}).select(['id', 'pr_name', 'pr_name_en']).sort([['id', 1]]);
    return resp.success({ data: items });
  }),

  get: Catcher(async (req, res) => {
    const resp = new Res(res);
    return resp.success({});
  }),

  create: Catcher(async (req, res) => {
    const resp = new Res(res);
    return resp.success({});
  }),

  update: Catcher(async (req, res) => {
    const resp = new Res(res);
    return resp.success({});
  }),

  remove: Catcher(async (req, res) => {
    const resp = new Res(res);
    return resp.success({});
  }),

  seed: Catcher(async (req, res) => {
    const resp = new Res(res);
    const result = await ProvinceModel.insertMany(provinces)
    return resp.success({ result });
  }),
};

module.exports = ProvincesController;
