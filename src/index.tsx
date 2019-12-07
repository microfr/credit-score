import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import "./styles.local.scss";

const CREDIT_QUERY = gql`
  query($id: ID!) {
    creditScore(id: $id) {
      id
      scores {
        agency
        creditScore
      }
    }
  }
`;

const _Creditscore: React.FunctionComponent = () => {
  const { data, loading } = useQuery(CREDIT_QUERY, {
    variables: {
      id: "1"
    }
  });
  if(loading) return <div>loading</div>
  return <div className="cs">
      {data.creditScore.scores.map((score: any) => <>{score.agency}<div className="cs__score">{score.creditScore}</div></>)}
      </div>
};

_Creditscore.displayName = "Creditscore";

_Creditscore.propTypes = {
  name: PropTypes.string.isRequired
};

export default React.memo(_Creditscore);
