const Result = require("../../models/result");
const mbtiList = require("../../service/mbtiList");

exports.createResult = async (ctx, next) => {
  const { mbti } = ctx.params;
  let result;
  try {
    result = await Result.find().exec();
    const numIncreased = result[0][mbti] + 1;
    result[0][mbti] = numIncreased;
    await Result.updateOne({}, { $set: result[0] });
    ctx.status = 200;
    ctx.body = result[0];
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: error };
  }
};

exports.readResult = async (ctx, next) => {
  let result;
  try {
    result = await Result.find().exec();
    let total = 0;
    for (const mbti of mbtiList) {
      total += result[0][mbti];
    }
    for (const mbti of mbtiList) {
      result[0][mbti] = result[0][mbti] / total;
    }
    ctx.status = 200;
    ctx.body = result[0];
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: error };
  }
};
