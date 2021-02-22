const Catcher = require("../middlewares/async");
const { Res } = require("../utils/common-func");
const districtModel = require('../models/districts.model')
const { districts } = require('../seeders/districts.json')

const districtsController = {
  list: Catcher(async (req, res) => {
    const resp = new Res(res);
    return resp.success({});
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
    const result = await districtModel.insertMany(districts)
    return resp.success({ result });

  }),
};

module.exports = districtsController;
