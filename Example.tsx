import React from "react";
import ReactDOM, { render } from "react-dom";
import Creditscore from "./src";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

window['React'] = React
window['ReactDOM'] = ReactDOM

const NODE = document.querySelector("#app");

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

render(
  <ApolloProvider client={client}>
    <Creditscore />
  </ApolloProvider>,
  NODE
);
