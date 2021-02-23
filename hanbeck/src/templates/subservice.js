import React from "react";
import { graphql, Link } from "gatsby";

import Block from "../components/block"
import StaticWhyWe from "../components/static-why-we"
import ContactForm from "../components/contact-form"
import SlideShow from "../components/slideshow"

import sprite from "../images/sprite.svg"
import eye from "../images/promo-eye.jpg"

function SubService(props){

  const service = props.data.strapiServicesSecondLevels;

  return (
    <React.Fragment>

    <section className="section">
          <div className="w">
                <article className="article">
                      <div className="article-header">
                            <Link to={"/service/"+service.service.slug} className="history-back">
                                  <svg className="inline-svg-icon">
                                    <use href={sprite+"#arr-b"}></use>
                                  </svg>
                                  Назад 
                            </Link>
                            <div className="article-header-hg">
                                  <h1>{service.name}</h1>
                                  <div className="subheader">
                                        <p>{service.short_description}</p>
                                  </div>
                            </div>
                      </div>

                      <div className="article-slideshow">
                            {service.pictures.map((img, index)=>(
                              <div className="article-slide" key={index}>
                                  <img src={img.localFile.publicURL} alt={service.name} />
                              </div>
                            ))}
                      </div>
                </article>
          </div>
    </section>

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


      <section className="section bg-grey prices-block-wrap padded">
            <div className="w">
                  <div className="bg-white prices-block">
                        <h2 className="h3">Наши цены</h2>
                        <div className="price-unit">
                              <div className="price-unit-sale">
                                    <div className="sale-item" data-sale="15">
                                          <span>15%</span>
                                    </div>
                              </div>
                              <div className="price-unit-text">
                                    <h3><a href="">Соствление плана питания</a></h3>
                                    <p>Язва желудка – заболевание желудка хронического рецидивирующего характера, сопровождающееся образованием дефекта слизисто</p>
                              </div>
                              <div className="price-unit-price">
                                    <div className="price">от 3000 Р</div>
                                    <a href="" className="price-about">Что входит в цену?</a>
                              </div>
                        </div>
                        <div className="price-unit">
                              <div className="price-unit-sale">
                                    <div className="sale-item" data-sale="15">
                                          <span>15%</span>
                                    </div>
                              </div>
                              <div className="price-unit-text">
                                    <h3><a href="">Соствление плана питания</a></h3>
                                    <p>Язва желудка – заболевание желудка хронического рецидивирующего характера, сопровождающееся образованием дефекта слизисто</p>
                              </div>
                              <div className="price-unit-price">
                                    <div className="price">от 3000 Р</div>
                                    <a href="" className="price-about">Что входит в цену?</a>
                              </div>
                        </div>
                        <form className="form-linear">
                              <div className="h3">Запишитесь на приём:</div>
                              <div className="input">
                                    <input type="text" />
                              </div>
                              <button className="btn btn-reg btn-blue">Записаться</button>      
                        </form>
                  </div>
            </div>
      </section>



      
      <SlideShow slides={props.data.allStrapiFeedbacks.edges} />

      <ContactForm />

    </React.Fragment>
  );

};

export default SubService;

export const query = graphql`
  query SubServiceQuery($slug: String!) {
    strapiServicesSecondLevels(slug: { eq: $slug }) {
        strapiId
        short_description
        text_2
        text_1
        methods
        name
        doctors {
          role
          name
          main_picture {
            localFile {
              publicURL
            }
          }
        }
        pictures {
          localFile {
            publicURL
          }
        }
        service {
          slug
          name
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
