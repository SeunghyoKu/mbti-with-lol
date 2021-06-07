const Router = require("koa-router");

const api = new Router();
const mbti = require("./mbti");
const score = require("./score");
const result = require("./result");

api.use("/mbti", mbti.routes());
api.use("/score", score.routes());
api.use("/result", result.routes());

module.exports = api;
