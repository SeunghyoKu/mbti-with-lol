const axios = require("axios");

const getResult = async (answer) => {
  let mbti = "";
  const mbtiList = [
    ["I", "E"],
    ["N", "S"],
    ["T", "F"],
    ["J", "P"],
  ];

  const getMostNumber = (arr) => {
    const countZero = arr.filter((el) => el === "0").length;
    const countOne = arr.filter((el) => el === "1").length;
    return countZero > countOne ? 0 : 1;
  };

  for (let i = 0; i < 4; i++) {
    const arr = [...answer.slice(i, i + 3)];
    mbti += mbtiList[i][getMostNumber(arr)];
  }

  return await axios
    .get(`https://lol-mbti-api.herokuapp.com/api/mbti/${mbti}`)
    .then((result) => {
      const { data } = result;
      return data;
    })
    .catch((err) => {
      console.error(err);
      return {};
    });
};

export default getResult;
