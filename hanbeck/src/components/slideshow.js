import React from "react"
import Block from "./block"
import sprite from "../images/sprite.svg"
import { StaticQuery, graphql } from "gatsby"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SlideShow(props){

	const sliderTexts = {
	  dots: false,
	  draggable:false,
	  arrows: true,
	  infinite: false,
	  speed: 300,
	  cssEase: 'linear',
	  auto:true,
	  afterChange:function(index){
	    slider.current.slickGoTo(index)
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


	return(
   	 <StaticQuery
   	   query={graphql`
   	      query feedbackList {
   	         allStrapiFeedbacks {
   	          edges {
   	            node {
   	              id
   	              person
   	              role
   	              youtube
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
   	   `}
       	render={data => (
			<section className="section slideshow-container mb0">
			  <section className="section section-wide flip feedback-slide mb0">
			     <div className="block photo">
			     	<div className="slideshow">
			     		<ul>
			     			<Slider {...sliderPhotos} id="feedbackPhotos" ref={slider}>
			     			{data.allStrapiFeedbacks.edges.map(element=>(
				     			<li key={element.node.id}>
				     				<div className="video-thumb">	
							        	<img src={element.node.picture[0].localFile.publicURL} alt="" />
							        	<a href={element.node.youtube} data-fancybox className="video-play">
							        	   <svg className="inline-svg-icon">
				  		  	  		            <use href={sprite+"#play"}></use>
							        	   </svg>
							        	</a>
							        </div>
				     			</li>
			     			))}
			     			</Slider>
			     		</ul>
				    </div>
			     </div>
			     <div className={"block "+props.bg+" banner-side"}>
			       <div className="block-w">
			         <div className="banner-side-text">
			  		  <h2 className="h3">Что говорят люди?</h2>
			  		  <div className="slider-container">
				  		  <Slider {...sliderTexts} id="feedbackTexts">
	  		    		  {data.allStrapiFeedbacks.edges.map(element=>(
	  		    		  	<React.Fragment key={element.node.id}>
		  		  	  		  <div className="feedback-author">
		  		  	  		    <h3 className="h1">{element.node.person}</h3>
		  		  	  		    <p>{element.node.role}</p>
		  		  	  		  </div>
		  		  	  		  <div className="feedback-text">
		  		  	  		    <p>“{element.node.feedback}”</p>
		  		  	  		  </div>
		  		  	  		  <p className="testimonials-calls">
		  		  	  		     <a href={element.node.youtube} data-fancybox className="video-init">
		  		  	  		        <span className="video-icon-bg">
		  		  	  		          <svg className="inline-svg-icon">
		  		  	  		            <use href={sprite+"#play"}></use>
		  		  	  		          </svg>
		  		  	  		        </span>
		  		  	  		        Смотреть видеоотзыв
		  		  	  		     </a>
		  		  	  		  </p>
	  		  	  		  </React.Fragment>
	  		  	  		  ))}
	  		  	  		  </Slider>
	  		  	  		</div>
			         </div>
			       </div>
			     </div>
			  </section>
		   </section>
		)}/>
	)
}

export default SlideShow