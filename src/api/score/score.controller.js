const Score = require("../../models/score");

exports.createScore = async (ctx, next) => {
  const { score } = ctx.request.body;
  try {
    const writtenScore = new Score({ score });
    await writtenScore.save();
    ctx.status = 200;
    ctx.body = "score : " + score + " is saved";
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: error };
  }
};

exports.readScore = async (ctx, next) => {
  let scores;
  try {
    scores = await Score.find().exec();
    ctx.status = 200;
    ctx.body = scores;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: error };
  }
};
