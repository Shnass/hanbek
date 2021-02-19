import React from "react"
import Block from "../components/block"
import Section from "../components/section"
import ServicesList from "../components/serviceslist"
import DoctorsList from "../components/doctorslist"
import SlideShow from "../components/slideshow"
import thumb1 from "../images/promo-clinic.jpg"
import thumb2 from "../images/promo-eye.jpg"
import thumb3 from "../images/joy-and-trust.jpg"
import { graphql } from "gatsby"

// markup
function IndexPage(props){
  return (
    <main>

    <Block img={thumb1} bg={"bg-cyan"} classes={"mobile--swap-on-photo mb0"}>
      <h2>Оздоровление организма эко методами</h2>
      <p>Клиника,  которой доверяют с врачами, которые все объясняют и не назначают лишнего.</p>
    </Block>
    <Block img={thumb2} bg={"bg-purple"} classes={"mobile--drop-photo flip"}>
      <h2>Уникальные системы диагностики</h2>               
      <p>Клиника,  которой доверяют с врачами, которые все объясняют и не назначают лишнего.</p>
    </Block>

    <Section title={"Услуги"} link={"/"} linkText={"все отделения"}>
      <ServicesList services={props.data.allStrapiServices.edges} />
    </Section>

    <Section title={"Наши врачи"}>
      <DoctorsList doctors={props.data.allStrapiDoctors.edges} />
    </Section>

    <Section title={"Наши принципы"} classes={"section bg-purple inverse mb0 tt"}>
       <div className="w">
       <div className="row">
          <div className="col-4 col-md-12">
             <h3 className="h2">Почему выбирают экоклинику?</h3>
          </div>
          <div className="col-4 col-md-12">
             <p>Нас часто называют нетрадиционной или альтернативной медициной. Мы же придерживаемся обратной точки зрения – наши практики как раз и есть самые, что ни на есть традиционные. Мы исходим из постулата, что красота и здоровье это единая целостная система организма</p>
          </div>
          <div className="col-4 col-md-12">
             <p>Специалисты клиники используют комплексный подход в работе с подопечными. Каждый план оздоровления разрабатывается индивидуально, с учетом общего состояния здоровья, цели человека, особенностей организма и “экстренности” (степени) развития недуга.</p>
             <p>Мы не занимаемся лечением, мы делаем вас здоровыми!</p>     
          </div>
       </div>
       </div>
    </Section>

    <SlideShow slides={props.data.allStrapiFeedbacks.edges} />

    <Block img={thumb3} bg={""} classes={"mb0"}>
      <h2>FORM!</h2>
    </Block>

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
    allStrapiFeedbacks {
     edges {
       node {
         id
         person
         role
         feedback
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