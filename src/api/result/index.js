const Router = require("koa-router");
const result = new Router();
const controller = require("./result.controller");

result.get("/", controller.readResult);
result.post("/write/:mbti", controller.createResult);

module.exports = result;
