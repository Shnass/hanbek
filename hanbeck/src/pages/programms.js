import React from "react"
import { graphql } from "gatsby"

import Section from "../components/section"
import ServicesList from "../components/serviceslist"



// markup
function ServicesPage(props){
  return (
    <main>
    	<div className="w">
	    	<div className="programms-layout">
	    		<div className="programms-types">
	    			<ul>
	    				<li><a href="" className="active">все</a></li>
	    				<li><a href="">оздоровление</a></li>
	    				<li><a href="">Названние группы программы</a></li>
	    			</ul>
	    		</div>
	    		<div className="programms-list">
	    			<h1>Комплексные программы оздоровления</h1>

					<div class="programm-types-mobile">
						<select className="select-customized">
							<option value="">все</option>
							<option value="">оздоровление</option>
							<option value="">Названние группы программы</option>
						</select>
					</div>	    			

	    			<div className="programms-list-thumbs">

						{props.data.allStrapiProgramms.edges.map((programm,i) => (
		    				<div className="programms-list-thumb">
		    					<figure><img src={programm.node.thumbhover.publicURL} alt={programm.node.name}/></figure>
		    					<div className="h">
		    						{programm.node.name}</div>
		    					<div className="t">
		    						{programm.node.thumbtext}</div>
		    					<div className="price">
		    						{programm.node.price} P</div>
		    					<a href={"/programms/"+programm.node.slug} className="btn btn-reg btn-cyan">Подробнее</a>
		    				</div>
		    			))}
	    			
	    			</div>
	    		</div>
	    	</div>
    	</div>
    </main>
  )
}

export default ServicesPage


export const PageQuery = graphql`
  query ProgrammsQuery {
    allStrapiProgramms {
      edges {
        node {
          id
          name
          price
          thumbtext
          slug
          thumbhover{
          	publicURL
          }
        }
      }
    }
  }
`