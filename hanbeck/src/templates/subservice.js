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
  const priceIncludes = function(e){
    e.preventDefault();
    e.target.nextSibling.classList.toggle('shown')
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
                                      <figure><img src={doctor.main_picture[0].localFile.publicURL} alt="" /></figure>
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


      <section className="section bg-beige prices-block-wrap padded mb0">
            <div className="w">
                  <div className="bg-white prices-block">
                        <h2 className="h3">Наши цены</h2>
                        {service.prices.map((unit,index)=>(
                          <div className="price-unit">
                                <div className="price-unit-sale">
                                      <div className="sale-item" data-sale={unit.discount}>
                                            <span>{unit.discount}%</span>
                                            <svg viewPort="0 0 90 90" version="1.1" preserveAspectRatio="xMinYMin meet">
                                              <circle r="43" cx="56" cy="56" fill="transparent" stroke-width="5" stroke-dashoffset="0" stroke="black" stroke-dasharray={270/100*unit.discount+" 270"}></circle>
                                            </svg>
                                      </div>
                                </div>
                                <div className="price-unit-text">
                                      <h3><Link to={"/prices/"+unit.slug}>{unit.name}</Link></h3>
                                      <div dangerouslySetInnerHTML={{__html: unit.description}}></div>
                                </div>
                                <div className="price-unit-price">
                                      <div className="price">от {unit.price} Р</div>
                                      <div className="price-about-container">
                                        <a href="" className="price-about" onClick={priceIncludes}>Что входит в цену?</a>
                                        <div className="price-about-modal">
                                          {unit.includes}
                                        </div>
                                      </div>
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

      <section className="section programms-list mb0">
      	{
      		service.programms.map((programm,i=1)=>(
		      	<div className={
		      		"programm-thumb "+((i>=4 && i%4===0)?"":((i>=3 && i%3===0)?"bg-beige":(i>=2 && i%2===0)?"bg-cyan":"bg-purple"))
		      		}>
		      		<div className="programm-thumb-inner">
		      			<div className="programm-thumb-wrap">
			      			<div className="h2">
			      				<div className="programm-icon">
			      					<img src={programm.thumbicon.publicURL} />
			      				</div>
			      				<span>{programm.name}</span>
			      			</div>
			      			<div className="programm-thumb-content">
			      				<p>
			      					{programm.thumbtext}
			      				</p>
			      			</div>
			      			<div className="programm-thumb-footer">
			      				<div className="price">{programm.price} руб.</div>
			      			</div>
			      			<Link to={"/programms/"+programm.slug} className={
			      				"btn btn-reg "+(((i>=4 && i%4===0) || ((i>=3 && i%3===0)))?"btn-blue":"btn-white")
			      			}>Подробнее</Link>
			      		</div>
		      		</div>
		      		<div className="programm-thumb-hover">
		      			<Link to={"/programms/"+programm.slug}><img src={programm.thumbhover.publicURL} alt="" /><span>Подробнее</span></Link>
		      		</div>
		      	</div>
      		))
      	}


      {/*
      	<div className="programm-thumb bg-cyan">
      		<div className="programm-thumb-inner">
      			<div className="programm-thumb-wrap">
	      			<div className="h2">
	      				<div className="programm-icon"></div>
	      				<span>Lorem, ipsum dolor sit amet.</span>
	      			</div>
	      			<div className="programm-thumb-content">
	      				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate ex, nihil repudiandae officia, vero ab quisquam facere perferendis culpa pariatur doloribus consequuntur sint aspernatur laudantium dolorem. Ipsa, expedita! Aliquam, facilis!</p>
	      			</div>
	      			<div className="programm-thumb-footer">
	      				<div className="price">1200 руб.</div>
	      			</div>
	      			<a href="" className="btn btn-reg btn-white">Подробнее</a>
	      		</div>
      		</div>
      		<div className="programm-thumb-hover"><a href=""><img src="" alt="" /><span>Подробнее</span></a></div>
      	</div>
      	<div className="programm-thumb bg-beige">
      		<div className="programm-thumb-inner">
      			<div className="programm-thumb-wrap">
	      			<div className="h2">
	      				<div className="programm-icon"></div>
	      				<span>Lorem, ipsum dolor sit amet.</span>
	      			</div>
	      			<div className="programm-thumb-content">
	      				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate ex, nihil repudiandae officia, vero ab quisquam facere perferendis culpa pariatur doloribus consequuntur sint aspernatur laudantium dolorem. Ipsa, expedita! Aliquam, facilis!</p>
	      			</div>
	      			<div className="programm-thumb-footer">
	      				<div className="price">1200 руб.</div>
	      			</div>
	      			<a href="" className="btn btn-reg btn-white">Подробнее</a>
	      		</div>
      		</div>
      		<div className="programm-thumb-hover"><a href=""><img src="" alt="" /><span>Подробнее</span></a></div>
      	</div>
      	<div className="programm-thumb">
      		<div className="programm-thumb-inner">
      			<div className="programm-thumb-wrap">
	      			<div className="h2">
	      				<div className="programm-icon"></div>
	      				<span>Lorem, ipsum dolor sit amet.</span>
	      			</div>
	      			<div className="programm-thumb-content">
	      				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate ex, nihil repudiandae officia, vero ab quisquam facere perferendis culpa pariatur doloribus consequuntur sint aspernatur laudantium dolorem. Ipsa, expedita! Aliquam, facilis!</p>
	      			</div>
	      			<div className="programm-thumb-footer">
	      				<div className="price">1200 руб.</div>
	      			</div>
	      			<a href="" className="btn btn-reg btn-blue">Подробнее</a>
	      		</div>
      		</div>
      		<div className="programm-thumb-hover"><a href=""><img src="" alt="" /><span>Подробнее</span></a></div>
      	</div>
      */}
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
          includes
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
        programms {
        	name
        	slug
        	price
        	bg
        	thumbtext
        	thumbicon {
      	    publicURL
        	}
        	thumbhover {
      	    publicURL
        	}

        }
    }
  }
`;
