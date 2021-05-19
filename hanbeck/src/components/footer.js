import React from "react"
import { useStaticQuery, StaticQuery, graphql, Link } from "gatsby"
import sprite from "../images/sprite.svg"
import logo from "../images/logo-icon.svg"
import signature from "../images/signature.png"


function Footer(props){

  const data = useStaticQuery(graphql`
    query footerStatic {
     allStrapiServices {
       edges {
         node {
           id
           name
           slug
         }
       }
     }
     strapiContactData {
      address
      phone
      facebook
      instagram
     }
    }
  `)
  const { address, phone, facebook, instagram } = data.strapiContactData


  return(
    <footer className="footer">
       <div className="w">
          <div className="row">
             <div className="col-5">
                <div className="signature">
                   <img src={signature} alt="" />
                </div>
                <div className="moto">
                   Не лечу, а делаю здоровыми только эклогичными методами
                </div>
                <address>
                   <a href={"tel:+"+phone.match(/\d+/g).join('')}>{phone}</a>
                   <span>{address}</span>
                </address>
                <div className="socials">
                   <a href={"http://facebook.com/"+facebook}>
                     <svg className="inline-svg-icon">
                       <use href={sprite+"#facebook-big"}></use>
                     </svg>
                   </a>
                   <a href={instagram}>
                     <svg className="inline-svg-icon">
                       <use href={sprite+"#instagram-big"}></use>
                     </svg>
                   </a>
                </div>
                <small className="copyright">@2011-2021 ЭКОКЛИНИКА</small>
             </div>
             <div className="col-6 footer-navi">
                <div className="row">
                  <div className="col-6">
                     <ul>
                      {data.allStrapiServices.edges.map((l,index)=>(
                        <li key={l.node.id}><a href={"/service/"+l.node.slug}>{l.node.name}</a></li>
                      ))}
                      </ul>
                  </div>
                </div>
                <div className="row">
                   <div className="col-6">
                      <div className="h">О клинике</div>
                      <ul>
                         <li><a href="">О клинике</a></li>
                         <li><Link to="/doctors/">Врачи</Link></li>
                         <li><a href="">Оборудование</a></li>
                         <li><a href="">Цены</a></li>
                      </ul>
                   </div>
                   <div className="col-6">
                      <div className="h">Конаткты</div>
                      <ul>
                         <li><Link to="/contacts/">Контакты</Link></li>
                         {/*<li><a href="">Оплатить счет</a></li>*/}
                      </ul>
                   </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <img src={logo} alt="" />
                  </div>
                </div>
             </div>
          </div>
       </div>
    </footer>
  )
}

export default Footer