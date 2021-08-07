import React from "react";
import { graphql, Link } from "gatsby";
import ContactForm from "../components/contact-form"
import SlideShow from "../components/slideshow"
import Tabs from "../components/tabs"
import sprite from '../images/sprite.svg';
import ReactMarkdown from 'react-markdown'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Price(props){

  const price = props.data.strapiPrices;

  const sliderSettings = {
    dots: false,
    draggable:false,
    arrows: true,
    infinite: false,
    speed: 300,
    cssEase: 'linear',
    auto:true,
    slidesToShow: 3,
    slidesToScroll: 3
  }


  return (
    <React.Fragment>
      <h1></h1>

      <section className="section">
            <div className="w">
                  <article className="article">
                        <div className="article-header">
                              <Link to={"/service/"} className="history-back">
                                    <svg className="inline-svg-icon">
                                      <use href={sprite+"#arr-b"}></use>
                                    </svg>
                                    Назад 
                              </Link>
                              <div className="article-header-hg">
                                    <h1>{price.name}</h1>
                              </div>
                              <div className="price-header-hg">
                                <div className="price">
                                  <span>от {price.price}</span>
                                  <button className="btn btn-reg btn-blue">Заказать</button>
                                </div>
                                <div className="subheader">
                                      <p>{price.price_explained}</p>
                                </div>
                          </div>
                        </div>

                          <div className="article-slideshow">
                               <div className="article-slide">
                                   <img src={price.detail_picture.publicURL} alt={price.name} />
                               </div>
                          </div>
                  </article>
            </div>
      </section>

      <section className="bg-beige padded">
        <div className="w">
          <h3 className="tac">{price.whentodo_title}</h3>
          <div className="reasons-carusel">
            <Slider {...sliderSettings}>
              {price.whentodo.split("\n").filter(reason=>reason.length>1).map((reason,ind)=>(
                <div className="reason-unit" key={ind}>
                  <strong>
                    {ind+1}
                  </strong>
                  <p class="h3">
                    {reason}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="bg-purple padded">
        <div className="w">
          <div className="preform-text"><p>{price.preform_text}</p></div>
          <div className="bg-white box">
            <div className="h2">
              {price.name} <span className="color-purple">от {price.price} р</span>
            </div>

            <form className="form-oneliner">
              <div className="h3">
                Запишитесь на приём:
              </div>
              <input className="form-control input-phone" type="text" name="phone"/>
              <button className="btn btn-reg btn-blue">
                Записаться
              </button>
            </form>

          </div>
        </div>
      </section>



      <section className="section section-wide tabs-section mb0">
         <div className="block">
            <div className="block-w">
              <div className="banner-side-text">
                 <h2>как мы это делаем?</h2>               
                 {price.text1}
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
               {price.methods}
              </div>
             </div>
          </Tabs>
         </div>
      </section>

      <section className="section section-wide tabs-section flip mb0">
         <div className="block">
            <div className="block-w">
              <div className="banner-side-text">
                 <h2>как мы это делаем?</h2>               
                 {price.text2}
              </div>
            </div>
         </div>
         <div className="block banner-side tabs-side">
          <Tabs>
              <div className="block-w" data-tab="Врачи">
                <div className="tab-text">
                      <div className="tech-description">
                            <div className="doctor-thumb-list">
                            {price.doctors.map(doctor=>(
                              <div className="doctor-thumb-il">
                                    <figure><img src={doctor.main_picture[0].localFile.publicURL} alt="" /></figure>
                                    <div className="doctor-thumb-text">
                                        <h3>{doctor.name}</h3>
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

      <SlideShow />

      <ContactForm />

    </React.Fragment>
  );

};

export default Price;

export const query = graphql`
  query PriceQuery($slug: String!) {
    strapiPrices(slug: { eq: $slug }) {
      name
      id
      text1
      text2
      methods
      price
      price_explained
      whentodo
      whentodo_title
      preform_text
      detail_picture{
        publicURL    
      }
      doctors {
        role
        name
        main_picture {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`;
