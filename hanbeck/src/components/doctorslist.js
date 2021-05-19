import React from "react"
import sprite from '../images/sprite.svg';

function ServicesList(props){
  return(
    <div className="doctors-list">
       <div className="row no-paddings">
          {props.doctors.map((element,index) => (
            <div className={(index%2===0 && index===props.doctors.length-1)?"col-12 col-sm-12":"col-6 col-sm-12"} key={element.node.id}>
               <div className="doctor-thumb">
                <a href="">
                 <img src={element.node.main_picture[0].localFile.publicURL} alt=""/>
                 <span className="doctor-credentials">
                  <span className="h2">{element.node.name}</span>
                  <span>{element.node.role}</span>
                 </span>
                </a>
                </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ServicesList