const Router = require("koa-router");

const api = new Router();
const mbti = require("./mbti");
const score = require("./score");

api.use("/mbti", mbti.routes());
api.use("/score", score.routes());

module.exports = api;
