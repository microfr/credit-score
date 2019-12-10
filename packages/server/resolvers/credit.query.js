const fetch = require("node-fetch");

exports.getCreditScore = async (_parent, _args, { token }) => {
  var query = `query {
    viewer {
      id
      creditScore {
        id
        scores {
          agency
          creditScore
        }
      }
    }
  }`;
    try {
        const data = await fetch("http://localhost:4000/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: token
          },
          body: JSON.stringify({
            query
          })
        });
        const {data: result} = await data.json();
        
        return result.viewer;
    } catch(err) {
        throw new Error(err)
    }
};
