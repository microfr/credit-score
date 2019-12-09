import React from "react";
import { render } from "react-dom";
import Creditscore from "./src";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const NODE = document.querySelector("#app");

const client = new ApolloClient({
  uri: "http://localhost:8081"
});

render(
  <ApolloProvider client={client}>
    <Creditscore />
  </ApolloProvider>,
  NODE
);
