import React from "react"
import { graphql } from "gatsby"

import Section from "../components/section"
import DoctorsList from "../components/doctorslist"


// markup
function DoctorsPage(props){
  return (
    <main>

    <Section title={"Наши врачи"}>
      <DoctorsList doctors={props.data.allStrapiDoctors.edges} />
    </Section>

    </main>
  )
}

export default DoctorsPage


export const PageQuery = graphql`
  query DoctorsQuery {
    allStrapiDoctors {
      edges {
        node {
          id
          name
          role
          main_picture {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  }
`