const Mbti = require("../../models/mbti");

exports.readMbti = async (ctx, next) => {
  const { mbti } = ctx.params;
  let result;
  try {
    result = await Mbti.find({ mbti }).exec();
    ctx.status = 200;
    ctx.body = result[0];
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: error };
  }
};
