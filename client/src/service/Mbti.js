const axios = require("axios");

class Mbti {
  constructor() {
    this.answer = "";
    this.mbti = "";
  }

  setMbtiType(answer) {
    this.answer = answer;
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
      this.mbti += mbtiList[i][getMostNumber(arr)];
    }
  }

  async getResult() {
    return await axios
      .get(`https://lol-mbti-api.herokuapp.com/api/mbti/${this.mbti}`)
      .then((result) => {
        const { data } = result;
        return data;
      })
      .catch((err) => {
        console.error(err);
        return {};
      });
  }

  async saveResult() {
    await axios
      .post(
        `https://lol-mbti-api.herokuapp.com/api/result/write/${this.mbti}`,
        {}
      )
      .catch((err) => {
        console.error(err);
      });
  }
}

export default Mbti;
