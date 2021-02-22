const ProvincesController = require("../controllers/Provinces.controller");

const http = require("express").Router();

http.get("/provinces/list", ProvincesController.list);
http.get("/provinces/list/:_id", ProvincesController.get);
http.post("/provinces/list", ProvincesController.create);
http.post("/provinces/seed", ProvincesController.seed);
http.put("/provinces/:_id", ProvincesController.update);
http.delete("/provinces/:_id", ProvincesController.remove);

const ProvincesRouter = http;
module.exports = ProvincesRouter;
