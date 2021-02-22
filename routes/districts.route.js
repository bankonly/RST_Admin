const districtsController = require("../controllers/districts.controller");

const http = require("express").Router();

http.get("/districts/list", districtsController.list);
http.get("/districts/list/:_id", districtsController.get);
http.post("/districts/list", districtsController.create);
http.post("/districts/seed", districtsController.seed);
http.put("/districts/:_id", districtsController.update);
http.delete("/districts/:_id", districtsController.remove);

const districtsRouter = http;
module.exports = districtsRouter;
