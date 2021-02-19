import React from "react"
import sprite from '../images/sprite.svg';

function ServicesList(props){
  return(
    <ol className="services-list">
      {props.services.map(element => (
        <li key={element.node.id}>
           <a href="">
              <div className="w">
                 <h3 className="h2">{element.node.name}</h3>
                 <p>
                   {element.node.short_description}
                 </p>
                 <span className="arrow-holder">
                   <svg className="inline-svg-icon">
                     <use href={sprite+"#arr-f"}></use>
                   </svg>
                 </span>
              </div>
           </a>
        </li>
      ))}
    </ol>
  )
}

export default ServicesList