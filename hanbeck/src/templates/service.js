import React from "react";
import { graphql, Link } from "gatsby";

import Block from "../components/block"
import StaticWhyWe from "../components/static-why-we"
import ContactForm from "../components/contact-form"
import SlideShow from "../components/slideshow"

import sprite from "../images/sprite.svg"
import eye from "../images/promo-eye.jpg"

function Service(props){

  const service = props.data.strapiServices;

  return (
    <React.Fragment>
      <section className="section topic-banner inverse mb0" style={{backgroundColor:service.banner_color}}>
        <div className="w">
          <h1 className="h2">{service.name}</h1>
          <div className="topic-banner-text" dangerouslySetInnerHTML={{__html: service.description}} />
          <div className="topic-banner-cards">
            <div className="row">
              {service.services_second_levels.map(subservice=>(
                <div className="col-4 col-md-6"><Link to={"/service-detailed/"+subservice.slug} className="topic-banner-card">{subservice.name} <i className="hot"></i></Link></div>
              ))}
              <div className="col-12">
                <a href="" className="expand">
                  Показать еще
                  <svg className="inline-svg-icon">
                    <use href={sprite+"#drop"}></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="topic-banner-bg">
            <img src={service.banner_picture.localFile.publicURL} alt="" />
          </div>
        </div>
      </section>
      <Block img={eye} bg={"bg-purple"} classes={"mobile--drop-photo flip mb0"}>
        <h2>Уникальные системы диагностики</h2>               
        <p>Клиника,  которой доверяют с врачами, которые все объясняют и не назначают лишнего.</p>
      </Block>

      <section className="section section-wide tabs-section mb0">
         <div className="block">
            <div className="block-w">
              <div className="banner-side-text">
                 <h3>как мы это делаем?</h3>               
                 {service.text_1}
              </div>
            </div>
         </div>
         <div className="block banner-side tabs-side">
          <div className="tabs">
            <div className="tabs-header">
              <a href="" className="on">ТЕХНОЛОГИИ</a>
              <a href="">МЕТОДЫ</a>
            </div>
            <div className="tabs-content">
              <div className="tab on">
                <div className="block-w">
                  <div className="tab-text">
                        <div className="tech-description">
                            {service.te}
                        </div>
                  </div>
                </div>
              </div>
              <div className="tab">
                <div className="block-w">
                  <div className="banner-side-text">
                    {service.text_1}
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>
      </section>

      <section className="section section-wide tabs-section flip mb0">
         <div className="block">
            <div className="block-w">
              <div className="banner-side-text">
                 <h3>как мы это делаем?</h3>               
                 {service.text_2}
              </div>
            </div>
         </div>
         <div className="block banner-side tabs-side">
          <div className="tabs">
            <div className="tabs-header">
              <a href="" className="on">ВРАЧИ</a>
              <a href="">ОБОРУДОВАНИЕ</a>
            </div>
            <div className="tabs-content">
              <div className="tab on">
                <div className="block-w">
                  <div className="tab-text">
                        <div className="tech-description">
                              <div className="doctor-thumb-list">
                              {service.doctors.map(doctor=>(
                                <div className="doctor-thumb-il">
                                      <figure><img src={doctor.main_picture.localFile.publicURL} alt="" /></figure>
                                      <div className="doctor-thumb-text">
                                          <h4>{doctor.name}</h4>
                                          <p>{doctor.role}</p>
                                      </div>
                                </div>
                              ))}
                              </div>
                        </div>
                  </div>
                </div>
              </div>
              <div className="tab">
                <div className="block-w">
                  <div className="banner-side-text">

                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>
      </section>



      <StaticWhyWe />
      
      <SlideShow slides={props.data.allStrapiFeedbacks.edges} />

      <ContactForm />

    </React.Fragment>
  );

};

export default Service;

export const query = graphql`
  query ServiceQuery($slug: String!) {
    strapiServices(slug: { eq: $slug }) {
      banner_color
      banner_picture {
        localFile {
          publicURL
        }
      }
      description
      name
      id
      text_2
      text_1
      methods
      doctors {
        role
        name
        main_picture {
          localFile {
            publicURL
          }
        }
      }
      services_second_levels {
        name
        slug
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
`;
