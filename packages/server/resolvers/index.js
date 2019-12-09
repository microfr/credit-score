const { getCreditScore } = require("./credit.query");
const { getAsset } = require('./asset.query')
module.exports = {
  Query: {
    creditScore: getCreditScore,
    asset: getAsset
  }
};
