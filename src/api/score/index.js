const Router = require("koa-router");
const score = new Router();
const controller = require("./score.controller");

score.get("/", controller.readScore);
score.post("/write", controller.createScore);

module.exports = score;
