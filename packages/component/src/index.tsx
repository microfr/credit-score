import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Loader from '@microfr/loader'
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
  if (loading) return <div>Loading</div>;
  return (
    <div className="cs">
      {data.creditScore.scores.map((score: any, i: number) => (
        <React.Fragment key={i}>
          {score.agency}
          <div className="cs__score">
            {score.creditScore}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

_Creditscore.displayName = "Creditscore";

export default React.memo(_Creditscore);
