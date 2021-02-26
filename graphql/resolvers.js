const provinceModel = require("model/models/provinces.model");
const districtModel = require("model/models/districts.model");

const resolvers = {
  Query: {
    provinces: async () => {
      const result = await provinceModel.find().sort("id");
      return result;
    },
    districts: async () => {
      const result = await districtModel
        .find()
        .populate("provinces", ["pr_name", "pr_name_en"])
        .select(["dr_name", "dr_name_en", "province"])
        .sort([["id", 1]]);
      return result;
    },
  },
  Mutation: {
    world: () => "Update!",
  },
};

module.exports = resolvers;
