const Catcher = require("../middlewares/async");
const { Res } = require("../utils/common-func");
const districtModel = require('model/models/districts.model')
const { districts } = require('../seeders/districts.json')

const districtsController = {
  list: Catcher(async (req, res) => {
    const resp = new Res(res);
    const result = await districtModel.find().select(['dr_name', 'dr_name_en']).sort([['id', 1]]);
    return resp.success({ data: result });
  }),
  get: Catcher(async (req, res) => {
    const resp = new Res(res);
    const { _id } = req.params;
    const result = await districtModel.findById({ _id });
    return resp.success({ data: result });
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
    const result = await districtModel.insertMany(districts)
    return resp.success({ result });
  }),
  get_more: Catcher(async (req, res) => {
    const resp = new Res(res);
    const result = await districtModel.find().populate('provinces', ['pr_name', 'pr_name_en']).select(['dr_name', 'dr_name_en', 'province']).sort([['id', 1]]);
    return resp.success({ data: result });
  }),
};

module.exports = districtsController;
