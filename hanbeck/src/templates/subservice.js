import React from "react";
import { graphql, Link } from "gatsby";
import Slider from "react-slick";

import ContactForm from "../components/contact-form"
import SlideShow from "../components/slideshow"
import Tabs from "../components/tabs"

import sprite from "../images/sprite.svg"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function SubService(props){

  const service = props.data.strapiServicesSecondLevels;
  const sliderSettings = {
    dots: true,
    draggable:false,
    arrows: true,
    infinite: false,
    speed: 300,
    cssEase: 'linear',
    auto:true,
  }

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
                         <Slider {...sliderSettings} id="sliderNames">
                           {service.pictures.map((img, index)=>(
                             <div className="article-slide" key={index}>
                                 <img src={img.localFile.publicURL} alt={service.name} />
                             </div>
                           ))}
                        </Slider>
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
          <Tabs>
             <div className="block-w" data-tab="Технологии">
              <div className="tab-text">
               <div className="tech-description">
                Технологии
               </div>
              </div>
             </div>
             <div className="block-w" data-tab="Методы">
              <div className="banner-side-text">
               {service.text_1}
              </div>
             </div>
          </Tabs>
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
            <Tabs>
                <div className="block-w" data-tab="Врачи">
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
                <div className="block-w" data-tab="Оборудование">
                  <div className="banner-side-text">
                    <p>Тут будет про оборудование</p>
                  </div>
                </div>
            </Tabs>
         </div>
      </section>


      <section className="section bg-grey prices-block-wrap padded">
            <div className="w">
                  <div className="bg-white prices-block">
                        <h2 className="h3">Наши цены</h2>
                        {service.prices.map((unit,index)=>(
                          <div className="price-unit">
                                <div className="price-unit-sale">
                                      <div className="sale-item" data-sale={unit.discount}>
                                            <span>{unit.discount}%</span>
                                      </div>
                                </div>
                                <div className="price-unit-text">
                                      <h3><Link to={"/prices/"+unit.slug}>{unit.name}</Link></h3>
                                      <div dangerouslySetInnerHTML={{__html: unit.description}}></div>
                                </div>
                                <div className="price-unit-price">
                                      <div className="price">от {unit.price} Р</div>
                                      <a href="" className="price-about">Что входит в цену?</a>
                                </div>
                          </div>
                        ))}
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



      
      <SlideShow />

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
        prices {
          price
          price_explained
          slug
          name
          discount
          description
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
  }
`;
