const axios = require("axios");

const getResult = async () => {
  return await axios
    .get(`https://lol-mbti-api.herokuapp.com/api/mbti/ISTJ`)
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((err) => {
      console.error(err);
      return {};
    });
};

export default getResult;
