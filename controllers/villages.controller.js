const Catcher = require("../middlewares/async");
const { Res } = require("../utils/common-func");
const { villages } = require("../seeders/villages.json");
const villagesModel = require("../models/villages.model");
const Mongo = require("../utils/mongo-query");
const VillagesController = {
  list: Catcher(async (req, res) => {
    const resp = new Res(res);
    const result = await villagesModel.find();
    return resp.success({ data: result });
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
    const result = await villagesModel.insertMany(villages);
    return resp.success({});
  }),
  get_more: Catcher(async (req, res) => {
    const resp = new Res(res);
    const paginate = await Mongo.find(villagesModel, {
      paginate: { data_set: req.query, force: true },
      select: "vill_name vill_name_en district",
      populate: { path: "districts", select: "dr_name dr_name_en province", populate: { path: "provinces", select: "pr_name pr_name_en" } },
    });
    return resp.success({ data: paginate });
  }),
};

module.exports = VillagesController;
