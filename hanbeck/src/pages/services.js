import React from "react"
import { graphql } from "gatsby"

import Section from "../components/section"
import ServicesList from "../components/serviceslist"



// markup
function ServicesPage(props){
  return (
    <main>

   <Section title={"Услуги"}>
     <ServicesList services={props.data.allStrapiServices.edges} />
   </Section>

    </main>
  )
}

export default ServicesPage


export const PageQuery = graphql`
  query ServicesQuery {
    allStrapiServices {
      edges {
        node {
          id
          name
          short_description
          slug
        }
      }
    }
  }
`