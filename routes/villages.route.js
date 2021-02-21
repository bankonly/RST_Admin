const VillagesController = require("../controllers/Villages.controller");

const http = require("express").Router();

http.get("/villages/list", VillagesController.list);
http.get("/villages/list/:_id", VillagesController.get);
http.post("/villages/list", VillagesController.create);
http.put("/villages/:_id", VillagesController.update);
http.delete("/villages/:_id", VillagesController.remove);

const VillagesRouter = http;
module.exports = VillagesRouter;
