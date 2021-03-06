import React from "react";
import { graphql, Link } from "gatsby";

function Price(props){

  return (
    <React.Fragment>
      <h1>{props.data.strapiPrices.name}</h1>
    </React.Fragment>
  );

};

export default Price;

export const query = graphql`
  query PriceQuery($slug: String!) {
    strapiPrices(slug: { eq: $slug }) {
      name
      id
    }
  }
`;
