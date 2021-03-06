import React from "react"
import { Link } from "gatsby"
import sprite from '../images/sprite.svg';

function ServicesList(props){
  return(
    <ol className="services-list">
      {props.services.map(element => (
        <li key={element.node.id}>
           <Link to={"/service/"+element.node.slug}>
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
           </Link>
        </li>
      ))}
    </ol>
  )
}

export default ServicesList