import React from "react"
import sprite from "../images/sprite.svg"

function Section(props){
	return(
		<section className={"section " + ((props.classes)?props.classes:"") + ((props.link)?" w-more-link":"")}>
		  <div className="section-header">
		      <div className="w">
		         <div className="section-header-title">
		            <h2 className="h3">{props.title}</h2>
		         </div>
		         {(!props.link)?"":
			         <div className="section-header-aside">
			            <a href={props.link} className="link-more">
			               {props.linkText}
			               <svg className="inline-svg-icon">
			                 <use href={sprite+"#arr-f"}></use>
			               </svg>
			            </a>
			         </div>
			     }
		      </div>
		  </div>
		  <div className="section-content">
		  	{props.children}
		  </div>
		</section>
	)
}

export default Section