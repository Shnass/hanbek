import React from "react"

function Block(props){
	return(
		<section className={"section section-wide "+props.classes}>
		   <div className="block photo">
		      <img src={props.img} alt="" />               
		   </div>
		   <div className={"block "+props.bg+" banner-side"}>
		     <div className="block-w">
		       <div className="banner-side-text">
		       	{props.children}
		       </div>
		     </div>
		   </div>
		</section>
	)
}

export default Block;