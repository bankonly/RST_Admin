const mongoose = require("mongoose");
const { DB_TIMESTAMP_CONFIG } = require("../utils/common-func");

const model_name = "provinces";

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    name_en: { type: String, required: true },
    reference: { type: mongoose.Schema.Types.ObjectId, ref: "collection_name" },
    deleted_at: { type: Date, default: null },
  },
  DB_TIMESTAMP_CONFIG
);

const ProvincesModel = mongoose.model(model_name, schema, model_name);

module.exports = ProvincesModel;
module.exports.ProvincesModelName = model_name;
