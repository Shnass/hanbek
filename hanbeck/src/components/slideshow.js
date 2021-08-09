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
	  arrows: false,
	  infinite: false,
	  speed: 300,
	  cssEase: 'linear',
	  auto:true,
	  afterChange:function(index){
	    //slider.current.slickGoTo(index)
	    const tile = document.querySelectorAll('.feedback-tile');
	    const currentTile = tile.item(index);
	    currentTile.classList.add('active');
	    siblings(currentTile).map(sib => sib.classList.remove('active'))
	    currentInd.current.innerHTML=index+1;
	  },
	  onInit: function(){

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
	const sliderTxt = React.useRef(null);
	const currentInd =  React.useRef(null);

	const siblings = node => Array.from(node.parentElement.children).filter(el => el !== node);
	React.useEffect(() => {
		const tileContainer = document.querySelector('.feedback-tiles');
		const tile = document.querySelectorAll('.feedback-tile');
		tile.forEach(function(el,i){
			el.addEventListener('click', e=>{
				if(window.innerWidth < 767){
					const pastBubbles = document.querySelectorAll('.feedback-bubble');
					pastBubbles.forEach(el=>el.remove());

					const bubble = document.createElement("div");
					bubble.classList.add('feedback-bubble');
					bubble.innerHTML = `
						<span class="tail"></span>
						<figure><img src="${el.dataset.img}" /></figure>
						<div class="bubble-description">
							<h4>${el.dataset.who}</h4>
							<p>${el.dataset.text}</p>
						</div>
						<button class="close"></button>
					`;
					tileContainer.appendChild(bubble);
					bubble.style.top = el.offsetTop + el.offsetHeight - tileContainer.offsetTop + 10 + 'px';
					bubble.querySelector('.tail').style.left = el.offsetLeft + el.offsetWidth / 2 + 'px';  
					bubble.querySelector('.close').addEventListener('click',function(){
						bubble.remove();
					})
				} else {
					sliderTxt.current.slickGoTo(i)
				}

			})
		})
		const controlBwd = document.querySelector('.arrow-bwd');
		const controlFwd = document.querySelector('.arrow-fwd');
		controlBwd.addEventListener('click',function(e){
			e.preventDefault();
			console.log(sliderTxt.current);
			sliderTxt.current.slickPrev()
		})
		controlFwd.addEventListener('click',function(e){
			e.preventDefault();
			sliderTxt.current.slickNext()
		})

	 });

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
			  <section className="section section-wide feedback-slide mb0">
			     <div className="block photo photo-tiles">
			     	<div className="feedback-tiles" dangerouslySetInnerHTML={{ __html: `<div class="feedback-tiles-title">Что говорят люди?</div><div class="feedback-tile active" data-who="${data.allStrapiFeedbacks.edges[0].node.person}" data-text="${data.allStrapiFeedbacks.edges[0].node.feedback}" data-video="${data.allStrapiFeedbacks.edges[0].node.youtube}" data-img="${data.allStrapiFeedbacks.edges[0].node.picture[0].localFile.publicURL}"><img src="${data.allStrapiFeedbacks.edges[0].node.picture[0].localFile.publicURL}" alt="" /></div>` + Array(48).fill(`<div class="feedback-tile" data-who="${data.allStrapiFeedbacks.edges[0].node.person}" data-text="${data.allStrapiFeedbacks.edges[0].node.feedback}" data-video="${data.allStrapiFeedbacks.edges[0].node.youtube}" data-img="${data.allStrapiFeedbacks.edges[0].node.picture[0].localFile.publicURL}"><img src="${data.allStrapiFeedbacks.edges[0].node.picture[0].localFile.publicURL}" alt="" /></div>`).join('')}}></div>
					
			     			{/*

					     	<div className="slideshow">
					     		<ul>
					     			<Slider {...sliderPhotos} id="feedbackPhotos" ref={slider}>
			     				data.allStrapiFeedbacks.edges.map(element=>(
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
			     			))
					     			</Slider>
					     		</ul>
						    </div>

			     			*/}
			     </div>
			     <div className={"block "+props.bg+" banner-side"}>
			       <div className="block-w">
			         <div className="banner-side-text">
			  		  <h2 className="h1">за меня скажут люди</h2>
			  		  <div className="slider-controls">
			  		  	<a href="" className="arrow-bwd">
			  		  		<svg className="inline-svg-icon">
			  		  		  <use href={sprite+"#shortarm"}></use>
			  		  		</svg>
			  		  	</a>
			  		  	<span className="slider-index">
			  		  		<span className="slider-index-current" ref={currentInd}>1</span>
			  		  		|
			  		  		<span className="slider-index-total">49</span>
			  		  	</span>
			  		  	<a href="" className="arrow-fwd">
				  		  	<svg className="inline-svg-icon">
				  		  	  <use href={sprite+"#longarm"}></use>
				  		  	</svg>
			  		  	</a>
			  		  </div>
			  		  <div className="slider-container">
				  		  <Slider {...sliderTexts} id="feedbackTexts" ref={sliderTxt}>
				  		  	{Array(49).fill(0).map((a,i) => (
				  		  		<React.Fragment key={i}>
					  		  		<div className="feedback-author">
				  		    		  <h3 className="h3">{data.allStrapiFeedbacks.edges[0].node.person}</h3>
				  		    		  <p>{data.allStrapiFeedbacks.edges[0].node.role}</p>
				  		    		 </div>
				  		    		 <div className="feedback-text">
				  		    		  <p>“{data.allStrapiFeedbacks.edges[0].node.feedback}”</p>
				  		    		 </div>
				  		    		  <p className="testimonials-calls">
				  		    		   <a href={data.allStrapiFeedbacks.edges[0].node.youtube} data-fancybox className="video-init">
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
		  		    		  {/*data.allStrapiFeedbacks.edges.map(element=>(
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
		  		  	  		  ))*/}
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