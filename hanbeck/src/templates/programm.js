import React from "react";
import { graphql, Link } from "gatsby";
import ContactForm from "../components/contact-form"
import SlideShow from "../components/slideshow"
import Tabs from "../components/tabs"
import Block from "../components/block"
import sprite from '../images/sprite.svg';
import ReactMarkdown from 'react-markdown'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Programm(props){

  const programm = props.data.strapiProgramms;

  const sliderTexts = {
    dots: true,
    draggable:false,
    arrows: true,
    infinite: false,
    speed: 300,
    cssEase: 'linear',
    auto:true,
    appendDots: (dots => <ul class="dots-container">{dots}<li class="dots-total"></li></ul>),
    customPaging:(i => <button>{i + 1}</button>),
    afterChange:function(index){
      slider.current.slickGoTo(index)
      sliderBg.current.style.backgroundColor=sliderContainer.current.querySelector(`div[data-index="${index}"] li[data-bg]`).dataset.bg
      console.log(sliderContainer.current);
    }
  }
  const sliderPhotos = {
    dots: false,
    draggable:false,
    arrows: false,
    infinite: false,
    speed: 300,
    cssEase: 'linear',
    auto:false,
  }
  const slider = React.useRef(null);
  const sliderBg = React.useRef(null);
  const sliderContainer = React.useRef(null);


  return (
    <React.Fragment>

      <section className="section programm-header bg-purple mb0">
            <div className="w">
                <div className="l">
                    <Link to={"/service/"} className="history-back">
                          <svg className="inline-svg-icon">
                            <use href={sprite+"#arr-b"}></use>
                          </svg>
                          Назад 
                    </Link>
                    <div className="programm-header-hg">
                          <h1>
                            <img src={programm.thumbicon.publicURL} alt={programm.name} />
                            Программа {programm.name}
                          </h1>
                            <div className="duration">
                                  <p>Продолжительность - {programm.duration}</p>
                            </div>
                            <div className="price">
                              <span>от {programm.price} Р</span>
                              <button className="btn btn-reg btn-white">Заказать</button>
                            </div>
                            <div className="description">
                                  <ReactMarkdown>{programm.header_text}</ReactMarkdown>
                            </div>

                    </div>
                  </div>
                  <div className="r">
                    <div className="programm-header-img">
                    <img src={programm.header_img.publicURL} alt={programm.name} />
                    </div>
                </div>
            </div>
      </section>

      <section className="bg-beige">
        <section className="section section-wide feedback-slide prices-slide mb0">
           <div className="block photo">
            <div className="slideshow" ref={sliderContainer}>
              <ul>
                <Slider {...sliderPhotos} id="feedbackPhotos" ref={slider}>
                {programm.thirdlevel.map((item,i)=>(
                  <li key={i} data-bg={item.forprogramm.bg}>
                    <div className="video-thumb"> 
                      <img src={item.forprogramm.img.publicURL} alt="" />
                    </div>
                  </li>
                ))}
                </Slider>
              </ul>
            </div>
           </div>
           <div className={"block banner-side banner-side-bg"} style={{backgroundColor:programm.thirdlevel[0].forprogramm.bg}} ref={sliderBg}>
             <div className="block-w">
               <div className="banner-side-text">
              <h2 className="h3 section-h">В программу входят:</h2>
              <Slider {...sliderTexts} id="feedbackTexts">
              {programm.thirdlevel.map((item,i)=>(
                  <div key={i}>
                    <div className="feedback-author">
                      <h3 className="h2">{item.name}</h3>
                    </div>
                    <div className="feedback-text">
                      <p>{item.forprogramm.description}</p>
                    </div>
                  </div>
                  ))}
                  </Slider>
               </div>
             </div>
           </div>
        </section>
      </section>


       <Block img={programm.result_img.publicURL} bg={"bg-white"} classes={"flip mobile--drop-photo mb0"}>
        <h2 className="h3">Результат после 1-й процедуры вас несомненно удивит:</h2>
        <div className="bullets">
          <ReactMarkdown>{programm.result}</ReactMarkdown>
        </div>
      </Block>



      <section className="bg-purple padded">
        <div className="w">
          <div className="bg-white box box-padded">
            <div className="h2">
              <img src={programm.thumbicon.publicURL} alt={programm.name} />
              Программа {programm.name}
            </div>
            <div className="h3">
              Продолжительность - {programm.duration} <span className="color-purple mlem">от {programm.price} р</span>
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
                 {programm.text1}
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
               {programm.methods}
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
                 {programm.text2}
              </div>
            </div>
         </div>
         <div className="block banner-side tabs-side">
          <Tabs>
              <div className="block-w" data-tab="Врачи">
                <div className="tab-text">
                      <div className="tech-description">
                            <div className="doctor-thumb-list">
                            {programm.doctors.map(doctor=>(
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

export default Programm;

export const query = graphql`
  query ProgrammQuery($slug: String!) {
    strapiProgramms(slug: { eq: $slug }) {
      name
      id
      text1
      text2
      methods
      technologies
      duration
      price
      header_text
      thumbicon{
        publicURL    
      }
      header_img{
        publicURL    
      }
      result_img{
        publicURL    
      }
      result
      doctors {
        role
        name
        main_picture {
          localFile {
            publicURL
          }
        }
      }
      thirdlevel {
        forprogramm {
          img {
            publicURL
          }
          description
          bg
        }
        name
      }
    }
  }
`;
