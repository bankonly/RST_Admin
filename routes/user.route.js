const UserController = require("../controllers/user.controller");
const UserValidator = require("../validations/user.validation");

const http = require("express").Router();

http.get("/user/profile", UserController.profile);
http.post("/user/change-password", UserValidator.changePassword, UserController.changePassword);
http.post("/user/update-profile-image", UserController.updateProfileImage);

const UserRouter = http;
module.exports = UserRouter;
