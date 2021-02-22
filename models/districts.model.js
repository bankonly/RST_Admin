const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");

const model_name = "districts";

const schema = new mongoose.Schema(
  {
    id: {
      type: Number, unique: true,
      required: true
    },
    dr_name: { type: String, required: true },
    dr_name_en: { type: String, required: true },
    province: { type: mongoose.Schema.Types.Number, ref: "provinces" },
    deleted_at: { type: Date, default: null },
  },
  DB_TIMESTAMP_CONFIG
);

const districtsModel = mongoose.model(model_name, schema, model_name);

module.exports = districtsModel;
module.exports.districtsModelName = model_name;
