import React from "react";
import PropTypes from "prop-types";
import Loader from '@microfr/loader'

interface Props {
  token?: string;
  [key: string]: any
}

const _CreditScoreLoader: React.FunctionComponent<Props> = ({ token, ...props }) => {
  return (
    <Loader uri="http://localhost:8081" namespace="CreditScore" {...props}/>
  );
};
_CreditScoreLoader.displayName = "CreditScoreLoader";

_CreditScoreLoader.propTypes = {
  token: PropTypes.string
};

export default React.memo(_CreditScoreLoader);
