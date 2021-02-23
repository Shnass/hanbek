  import React from "react";
import { graphql } from "gatsby";

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
              <div className="col-4 col-md-6"><a href="" className="topic-banner-card">Артроз суставов <i className="hot"></i></a></div>
              <div className="col-4 col-md-6"><a href="" className="topic-banner-card">Артроз суставов <i className="hot"></i></a></div>
              <div className="col-4 col-md-6"><a href="" className="topic-banner-card">Артроз суставов</a></div>
              <div className="col-4 col-md-6"><a href="" className="topic-banner-card">Артроз суставов</a></div>
              <div className="col-4 col-md-6"><a href="" className="topic-banner-card">Артроз суставов</a></div>
              <div className="col-4 col-md-6"><a href="" className="topic-banner-card">Артроз суставов</a></div>
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
                 <p>Нас часто называют нетрадиционной или альтернативной медициной. Мы же придерживаемся обратной точки зрения – наши практики как раз и есть самые, что ни на есть традиционные. Мы исходим из постулата, что красота и здоровье это единая целостная система организма.</p>
                 <img src="images/cardio.png" alt="" className="rb-img" />
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
                              <p>Нас часто называют нетрадиционной или альтернативной медициной. Мы же придерживаемся обратной точки зрения – наши практики как раз и есть самые, что ни на есть традиционные. Мы исходим из постулата, что красота и здоровье это единая целостная система организма.</p>
                              <figure>
                                    <img src="images/temp-service-pic.jpg" alt="" />
                              </figure>
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

      <section className="section section-wide tabs-section flip mb0">
         <div className="block">
            <div className="block-w">
              <div className="banner-side-text">
                 <img src="images/logo-icon.svg" alt="" className="t-img t-logo" />
                 <h3>как мы это делаем?</h3>               
                 <p>Нас часто называют нетрадиционной или альтернативной медициной. Мы же придерживаемся обратной точки зрения – наши практики как раз и есть самые, что ни на есть традиционные. Мы исходим из постулата, что красота и здоровье это единая целостная система организма.</p>
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
                                    <div className="doctor-thumb-il">
                                          <figure><a href=""><img src="images/small-doctor-thumb.jpg" alt="" /></a></figure>
                                          <div className="doctor-thumb-text">
                                                <a href="">
                                                      <h4>Ринат Ханбек</h4>
                                                      <p>Основатель клиники и описание в 2 строки</p>
                                                </a>
                                          </div>
                                    </div>
                                    <div className="doctor-thumb-il">
                                          <figure><a href=""><img src="images/small-doctor-thumb.jpg" alt="" /></a></figure>
                                          <div className="doctor-thumb-text">
                                                <a href="">
                                                      <h4>Ринат Ханбек</h4>
                                                      <p>Основатель клиники и описание в 2 строки</p>
                                                </a>
                                          </div>
                                    </div>
                                    <div className="doctor-thumb-il">
                                          <figure><a href=""><img src="images/small-doctor-thumb.jpg" alt="" /></a></figure>
                                          <div className="doctor-thumb-text">
                                                <a href="">
                                                      <h4>Ринат Ханбек</h4>
                                                      <p>Основатель клиники и описание в 2 строки</p>
                                                </a>
                                          </div>
                                    </div>
                                    <div className="doctor-thumb-il">
                                          <figure><a href=""><img src="images/small-doctor-thumb.jpg" alt="" /></a></figure>
                                          <div className="doctor-thumb-text">
                                                <a href="">
                                                      <h4>Ринат Ханбек</h4>
                                                      <p>Основатель клиники и описание в 2 строки</p>
                                                </a>
                                          </div>
                                    </div>
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
