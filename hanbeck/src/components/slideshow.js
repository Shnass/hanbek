import React from "react"
import Block from "./block"
import sprite from "../images/sprite.svg"

function SlideShow(props){
	return(
		<section className="section slideshow-container mb0">
		  <div className="slideshow">
		  	{props.slides.map(element=>(
		  		<Block key={element.node.id} img={element.node.picture.localFile.publicURL} bg={""} classes={"flip feedback-slide mb0"}>
		  		  <h2 className="h3">Что говорят люди?</h2>
		  		  <div className="feedback-author">
		  		    <h3 className="h1">{element.node.person}</h3>
		  		    <p>{element.node.role}</p>
		  		  </div>
		  		  <div className="feedback-text">
		  		    <p>“{element.node.feedback}”</p>
		  		  </div>
		  		  <p className="testimonials-calls">
		  		     <a href="" className="video-init">
		  		        <span className="video-icon-bg">
		  		          <svg className="inline-svg-icon">
		  		            <use href={sprite+"#play"}></use>
		  		          </svg>
		  		        </span>
		  		        Смотреть видеоотзыв
		  		     </a>
		  		  </p>
		  		</Block>
		  	))}
	      </div>
	   </section>
	)
}

export default SlideShow