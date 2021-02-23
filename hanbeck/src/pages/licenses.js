import React from "react"
import { graphql } from "gatsby"

import Section from "../components/section"
import ContactForm from "../components/contact-form"


// markup
function IndexPage(props){
  return (
    <main>

    <Section title={"Лицензии"} classes={"mb0 bg-cyan padded"}>
      <div class="w">
            <div class="licenses-list">
                  <div class="row">
                        {props.data.allStrapiLicenses.edges.map(license => (
                          <div class="col-6">
                                <div class="license-unit">
                                      <h3>{license.node.name}</h3>
                                      <div class="license-about">
                                            {license.node.description}
                                      </div>
                                      <figure><img src={license.node.picture.localFile.publicURL} alt="" /></figure>
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
             localFile {
               publicURL
             }
           }
         }
       }
     }
  }
`