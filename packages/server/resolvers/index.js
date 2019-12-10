const { getCreditScore } = require("./credit.query");
const { getAsset } = require('./asset.query')
module.exports = {
  Query: {
    viewer: getCreditScore,
    asset: getAsset
  }
};
