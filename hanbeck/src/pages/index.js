import React from "react"
import { graphql } from "gatsby"

import Block from "../components/block"
import Section from "../components/section"
import ServicesList from "../components/serviceslist"
import DoctorsList from "../components/doctorslist"
import SlideShow from "../components/slideshow"
import StaticWhyWe from "../components/static-why-we"
import ContactForm from "../components/contact-form"

import thumb1 from "../images/promo-clinic.jpg"
import thumb2 from "../images/promo-eye.jpg"
import thumb3 from "../images/we-have-whole-crew-here.jpg"


// markup
function IndexPage(props){
  return (
    <main>
     <Block img={thumb1} bg={"bg-cyan"} classes={"mobile--swap-on-photo mb0"}>
      <h2 className="h1">Оздоровление организма эко&nbsp;методами</h2>
      <p>Клиника,  которой доверяют с врачами, которые все объясняют и не назначают лишнего.</p>
    </Block>
    <Block img={thumb3} bg={"bg-purple"} classes={"mobile--drop-photo flip"}>
      <h2 className="h1" style={{maxWidth:"5em"}}>клиника <nobr>на стыке</nobr> медицин</h2>               
      <p>Клиника,  которой доверяют с врачами, которые все объясняют и не назначают лишнего.</p>
    </Block>

    <Section title={"Наши услуги"} link={"/services/"} linkText={"все отделения"}>
      <ServicesList services={props.data.allStrapiServices.edges} />
    </Section>

    <Section title={"Наши врачи"} classes={"sm-mb-0 mb0"}>
      <DoctorsList doctors={props.data.allStrapiDoctors.edges} />
    </Section>

    <StaticWhyWe />
 

    <SlideShow/>

    <ContactForm />
    </main>
  )
}

export default IndexPage


export const PageQuery = graphql`
  query MyQuery {
    allStrapiServices {
      nodes {
        id
      }
      edges {
        node {
          id
          name
          slug
          short_description
        }
      }
    }
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