import React from "react"
import { graphql } from "gatsby"

import Section from "../components/section"
import ContactForm from "../components/contact-form"


// markup
function IndexPage(props){
  return (
    <main>

    <Section title={"Лицензии"} classes={"mb0 bg-cyan padded"}>
      <div className="w">
            <div className="licenses-list">
                  <div className="row">
                        {props.data.allStrapiLicenses.edges.map((license,i) => (
                          <div className="col-6 col-sm-12" key={i}>
                                <div className="license-unit">
                                      <h2>{license.node.name}</h2>
                                      <div className="license-about">
                                            {license.node.description}
                                      </div>
                                      <figure><img src={license.node.picture.publicURL} alt="" /></figure>
                                </div>
                          </div>
                        ))}
                  </div>
            </div>
      </div>
    </Section>




    <ContactForm />

    </main>
  )
}

export default IndexPage


export const PageQuery = graphql`
  query LicensesQuery {
    allStrapiLicenses {
       edges {
         node {
           name
           description
           picture {
             publicURL
           }
         }
       }
     }
  }
`