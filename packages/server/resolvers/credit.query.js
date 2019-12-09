const fetch = require("node-fetch");

exports.getCreditScore = async (parent, { id }, { user }) => {
  var query = `query creditScore($id: ID!) {
        creditScore(id: $id) {
            id
            scores {
                agency
                creditScore
            }
        }
      }`;
    try {
        const data = await fetch("http://localhost:4000/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            query,
            variables: { id: id }
          })
        });
        const {data: result} = await data.json();
      
        return result.creditScore;
    } catch(err) {
        throw new Error(err)
    }
};
