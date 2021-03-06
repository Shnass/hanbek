import React, {useState} from "react"


function Tabs(props){
	const[activeTab, activeTabToggle] = useState(0);
	const activateTab = (e) => {
	  e.preventDefault();
	  activeTabToggle(+e.target.dataset.index)
	}

	return(
		<div className="tabs">
		  <div className="tabs-header">
		  	{props.children.map((tab, index)=>(
			    <a href="" key={index} className={(index===activeTab)?"on":''} data-index={index} onClick={activateTab}>{tab.props["data-tab"]}</a>
		  	))}
		  </div>
		  <div className="tabs-content">
		  	{props.children.map((tab, index)=>(
		  		<div className="tab" key={index} data-tab={index} style={{display:(index!==activeTab)?"none":"block"}}>
		  			{tab}
		  		</div>
		  	))}
		  </div>
		</div>
	)
}

export default Tabs;