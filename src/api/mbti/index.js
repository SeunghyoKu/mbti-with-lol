const Router = require("koa-router");
const mbti = new Router();
const controller = require("./mbti.controller");

mbti.get("/:mbti", controller.readMbti);

module.exports = mbti;
