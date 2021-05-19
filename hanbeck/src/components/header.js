import React, {useState} from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import logo from '../images/logo.svg';
import servicesBg from '../images/joy-and-trust.jpg';
import sprite from '../images/sprite.svg';

function Header(props){
	const[servicesDesc, servicesDescToggle] = useState(false);
	const[naviMob, naviMobToggle] = useState(false);
	const[naviTab, naviTabToggle] = useState(1);
	const toggleServices = (e) => {
	  e.preventDefault();
	  servicesDescToggle(!servicesDesc)
	}
	const toggleNavi = (e) => {
	  e.preventDefault();
	  naviMobToggle(!naviMob)
	}
	const tabNavi = (e) => {
	  e.preventDefault();
	  console.log(+e.target.dataset.tab)
	  naviTabToggle(+e.target.dataset.tab)
	}

	const data = useStaticQuery(graphql`
	  query headerStatic {
	   allStrapiServices {
	     edges {
	       node {
	         id
	         name
	         services_second_levels {
	           slug
	           short_description
	           name
	         }
	         slug
	       }
	     }
	   }
	   strapiContactData {
	    address
	    phone
	    facebook
	    instagram
	    workhours
	    whatsapp
	   }
	  }
	`)
	const { address, phone, whatsapp, instagram, workhours } = data.strapiContactData


	return(
		<header className="header">
		  <div className="header-row">
		   <div className="w">
		      	 <div className="toggle-subnavi"  onClick={toggleServices}>
                   <svg className="inline-svg-icon">
                     <use href={sprite+"#sandwich-full"}></use>
                   </svg>
	             </div>
		         <div className="header-logo">
		            <a href="/"><img src={logo} alt="" /></a>
		         </div>
		         <div className={"header-navi "+((!naviMob)?"":"shown")}>
	 		         <nav className={"site-navi " + ((naviTab===1)?"on":"")}>
	 		            <ul>
	 		               <li><Link to="/services/">Услуги</Link></li>
	 		               <li><Link to="/doctors/">Врачи</Link></li>
	 		               <li><Link to="/licenses/">Лицензии</Link></li>
	 		               <li><Link to="/contacts/">Контакты</Link></li>
	 		            </ul>
	 		         </nav>
	 		         <nav className={"services-navi " + ((naviTab===0)?"on":"")} style={{display:(servicesDesc)?'block':'none'}}>
	 		           <div className="wrap">
	 		             <div className="w">
 		               	   	<ul>
 	               	          {data.allStrapiServices.edges.map((l,index)=>(
 	               	          <li key={l.node.id}>
 	               	          	<Link to={"/service/"+l.node.slug}>{l.node.name}</Link>
 	               	          	{
 	               	          		(!l.node.services_second_levels.length)?'':(
 			               	            <div className="second-level">
 			               	              <ul>
 			               	               {l.node.services_second_levels.map((subl,sublIndex)=>(
 			               	                <li key={sublIndex}>
 			               	                  <Link to={"/service-detailed/"+subl.slug}>
 			               	                    <div className="h">{subl.name}</div>
 			               	                    <div className="p">{subl.short_description}</div>
 			               	                  </Link>
 			               	                </li>
 			               	               ))}
 			               	              </ul>
 			               	            </div>
 	               	          		)
 	               	          	}
 	               	          </li>
 	               	          ))}
 		               		</ul>
	 		             </div>
	 		             <div className="bg">
	 		               <div className="services-navi-bg" style={{backgroundImage:'url('+servicesBg+')'}}></div>
	 		             </div>
	 		             <a href="" className="navi-close" onClick={toggleServices}>
	 		               <svg className="inline-svg-icon">
	 		                 <use href={sprite+"#cross"}></use>
	 		               </svg>
	 		             </a>
	 		           </div>
	 		         </nav>

		         </div>
		         <div className="header-contacts">
		            <div className="header-socials">
		               <a href={"whatsapp://send?phone="+whatsapp.match(/\d+/g).join('')}>
		                 <svg className="inline-svg-icon">
		                   <use href={sprite+"#wassup"}></use>
		                 </svg>
		               </a>
		               <a href={instagram}>
		                 <svg className="inline-svg-icon">
		                   <use href={sprite+"#instagram"}></use>
		                 </svg>
		               </a>
		            </div>
		            <div className="header-phone">
		               <a href={"tel:+"+phone.match(/\d+/g).join('')}>
		                 <span className="full">
		                 	{phone}
		                 </span>
		                 <span className="short">
		                   <svg className="inline-svg-icon">
		                     <use href={sprite+"#phone"}></use>
		                   </svg>
		                 </span>
		               </a>
                 	   <span className="hours">{workhours}</span>
		            </div>
		            <div className="header-btn">
		               <a href="" className="btn btn-reg btn-blue">
		               	Записаться
		               	<svg className="inline-svg-icon">
		               	  <use href={sprite+"#arr-f"}></use>
		               	</svg>
		               </a>
		            </div>
		            <div className="navi-toggle" onClick={toggleNavi}>
		               <svg className="inline-svg-icon" style={{display:(naviMob)?'none':'block'}}>
		                 <use href={sprite+"#sandwich-full"}></use>
		               </svg>
		               <svg className="inline-svg-icon" style={{display:(!naviMob)?'none':'block'}}>
		                 <use href={sprite+"#cross"}></use>
		               </svg>
		            </div>
		         </div>
		      </div>
		   </div>

	      <div className={"header-navi-row "+((!naviMob)?"":"shown")}>
	         <div className="navi-switch">
	           <a href="" className={((naviTab===0)?"on":"")} data-tab={0} onClick={tabNavi}>Услуги</a>
	           <a href="" className={((naviTab===1)?"on":"")} data-tab={1} onClick={tabNavi}>Меню</a>
	         </div>
	      </div>
		</header>
	)
}

export default Header