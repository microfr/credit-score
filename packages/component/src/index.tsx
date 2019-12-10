import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import * as fromTypes from "./types";
import "./styles.local.scss";

/*
  Queries viewer object for creditScore. Auth token should handle authorizing
  data retrieval, which is passed in automatically via Loader package. 
  If no auth token, no data.
*/
const CREDIT_QUERY = gql`
  query {
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
  }
`;

/**
 * A component that displays a user's credit score data. 
 */
const _CreditScore: React.FunctionComponent = () => {
  const [scores, setScores] = useState<fromTypes.CreditScoreNode[] | null>(
    null
  );
  const { loading } = useQuery(CREDIT_QUERY, {
    onCompleted: ({ viewer }) => setScores(viewer.creditScore),
    /*
      Throw error to be caught by error boundary.
    */
    onError: err => {
      throw err;
    }
  });

  /*
    Display skeleton if not loaded.
  */
  if (loading && !scores)
    return (
      <div className="skeleton">
        <div className="skeleton__score"></div>
        <div className="skeleton__score"></div>
      </div>
    );

  return (
    <div className="cs">
      {scores &&
        scores.map((score: any, i: number) => (
          <React.Fragment key={i}>
            {score.agency}
            <div className="cs__score">{score.creditScore}</div>
          </React.Fragment>
        ))}
    </div>
  );
};

_CreditScore.displayName = "CreditScore";

export default React.memo(_CreditScore);
