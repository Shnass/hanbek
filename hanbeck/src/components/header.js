import React from "react"
import logo from '../images/logo.svg';
import servicesBg from '../images/joy-and-trust.jpg';
import sprite from '../images/sprite.svg';

function Header(props){
	return(
		<header className="header">
		   <div className="w">
		      <div className="header-row">
		         <div className="header-logo">
		            <a href="/"><img src={logo} alt="" /></a>
		         </div>
		         <div className="header-contacts">
		            <div className="header-socials">
		               <a href="">
		                 <svg className="inline-svg-icon">
		                   <use href={sprite+"#wassup"}></use>
		                 </svg>
		               </a>
		               <a href="">
		                 <svg className="inline-svg-icon">
		                   <use href={sprite+"#instagram"}></use>
		                 </svg>
		               </a>
		            </div>
		            <div className="header-address">
		               г. Москва, ул. Шаболовская, д.1
		            </div>
		            <div className="header-phone">
		               <a href="tel:">
		                 <span className="full">+7 495 111 22 33</span>
		                 <span className="short">
		                   <svg className="inline-svg-icon">
		                     <use href={sprite+"#phone"}></use>
		                   </svg>
		                 </span>
		               </a>
		            </div>
		            <div className="header-btn">
		               <a href="" className="btn btn-reg btn-blue">Записаться</a>
		            </div>
		            <div className="navi-toggle">
		               <svg className="inline-svg-icon show-navi">
		                 <use href={sprite+"#sandwich-full"}></use>
		               </svg>
		               <svg className="inline-svg-icon hide-navi">
		                 <use href={sprite+"#cross"}></use>
		               </svg>
		            </div>
		         </div>
		      </div>
		      <div className="header-navi-row">
		         <div className="navi-switch">
		           <a href="">Услуги</a>
		           <a href="" className="on">Меню</a>
		         </div>
		         <nav className="site-navi">
		            <ul>
		               <li className="toggle-subnavi">
		                 <a href="">
		                   <svg className="inline-svg-icon">
		                     <use href={sprite+"#sandwich"}></use>
		                   </svg>
		                   Услуги
		                 </a>
		               </li>
		               <li><a href="">Врачи</a></li>
		               <li><a href="">Цены</a></li>
		               <li><a href="">Акции</a></li>
		               <li><a href="">Отзывы</a></li>
		               <li><a href="">Оборудование</a></li>
		               <li><a href="">Лицензии</a></li>
		               <li><a href="">Контакты</a></li>
		            </ul>
		         </nav>
		         <nav className="services-navi on">
		           <div className="wrap">
		             <div className="w">
		               <ul>
		                 <li>
		                   <a href="">диагностика</a>
		                   <div className="second-level">
		                     <ul>
		                       <li>
		                         <a href="">
		                           <div className="h">Lorem, ipsum.</div>
		                           <div className="p">Lorem, ipsum dolor sit amet consectetur adipisicing.</div>
		                         </a>
		                       </li>
		                       <li>
		                         <a href="">
		                           <div className="h">Neque, libero!</div>
		                           <div className="p">Labore, est beatae minus incidunt illum, dignissimos?</div>
		                         </a>
		                       </li>
		                       <li>
		                         <a href="">
		                           <div className="h">Fugiat, nostrum!</div>
		                           <div className="p">Sint odio, quod nobis tempore id? Velit.</div>
		                         </a>
		                       </li>
		                       <li>
		                         <a href="">
		                           <div className="h">Quidem, labore.</div>
		                           <div className="p">Illo voluptas minus porro aliquam iusto omnis.</div>
		                         </a>
		                       </li>
		                       <li>
		                         <a href="">
		                           <div className="h">Perferendis, laudantium?</div>
		                           <div className="p">Aliquam facilis exercitationem ullam dolorum, suscipit minus?</div>
		                         </a>
		                       </li>
		                       <li>
		                         <a href="">
		                           <div className="h">Quasi, deserunt.</div>
		                           <div className="p">Excepturi, eaque quod deleniti quisquam sed voluptatibus.</div>
		                         </a>
		                       </li>
		                       <li>
		                         <a href="">
		                           <div className="h">Vero, accusantium?</div>
		                           <div className="p">Et voluptatum, vero sint, ratione omnis debitis.</div>
		                         </a>
		                       </li>
		                       <li>
		                         <a href="">
		                           <div className="h">Quae, ratione.</div>
		                           <div className="p">Ea libero, quae iusto enim assumenda in.</div>
		                         </a>
		                       </li>
		                       <li>
		                         <a href="">
		                           <div className="h">Sapiente, ipsam.</div>
		                           <div className="p">Eligendi quis repudiandae in possimus amet unde.</div>
		                         </a>
		                       </li>
		                       <li>
		                         <a href="">
		                           <div className="h">Maxime, accusantium!</div>
		                           <div className="p">Voluptates saepe autem illo optio distinctio eligendi?</div>
		                         </a>
		                       </li>
		                       <li>
		                         <a href="">
		                           <div className="h">Excepturi, obcaecati.</div>
		                           <div className="p">Rem suscipit blanditiis omnis, a repellendus ut.</div>
		                         </a>
		                       </li>
		                       <li>
		                         <a href="">
		                           <div className="h">Atque, quia.</div>
		                           <div className="p">Sed aliquid consequuntur error laudantium totam, rem!</div>
		                         </a>
		                       </li>
		                       <li>
		                         <a href="">
		                           <div className="h">Consequuntur, omnis!</div>
		                           <div className="p">Ipsam, nemo nam quae ducimus aspernatur. Repudiandae.</div>
		                         </a>
		                       </li>
		                       <li>
		                         <a href="">
		                           <div className="h">Quam, magnam?</div>
		                           <div className="p">Ducimus aperiam corrupti possimus, earum error ad.</div>
		                         </a>
		                       </li>
		                       <li>
		                         <a href="">
		                           <div className="h">Recusandae, a.</div>
		                           <div className="p">Accusamus, beatae voluptates dolorem quod assumenda ad.</div>
		                         </a>
		                       </li>
		                     </ul>
		                     
		                   </div>
		                 </li>
		               </ul>

		             </div>
		             <div className="bg">
		               <div className="services-navi-bg" style={{backgroundImage:'url('+servicesBg+')'}}></div>
		             </div>
		             <a href="" className="navi-close">
		               <svg className="inline-svg-icon">
		                 <use href={sprite+"#cross"}></use>
		               </svg>
		             </a>
		           </div>
		         </nav>
		      </div>
		   </div>
		</header>
	)
}

export default Header