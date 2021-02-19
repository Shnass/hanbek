import React from "react"
import sprite from "../images/sprite.svg"
import logo from "../images/logo-icon.svg"
import signature from "../images/signature.png"


function Footer(props){
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
                   <a href="tel:+">+7 495 111 22 33</a>
                   <span>г. Москва, ул. Шаболовская, д.1</span>
                </address>
                <div className="socials">
                   <a href="">
                     <svg className="inline-svg-icon">
                       <use href={sprite+"#facebook-big"}></use>
                     </svg>
                   </a>
                   <a href="">
                     <svg className="inline-svg-icon">
                       <use href={sprite+"#instagram-big"}></use>
                     </svg>
                   </a>
                </div>
                <small className="copyright">@2011-2021 ЭКОКЛИНИКА</small>
             </div>
             <div className="col-7">
                <div className="row">
                   <div className="col-6">
                      <ul>
                         <li><a href="">Дигностика</a></li>
                         <li><a href="">Профилактика</a></li>
                         <li><a href="">Проблемы ЖКТ</a></li>
                         <li><a href="">Сердечные проблемы</a></li>
                      </ul>
                   </div>
                   <div className="col-6">
                      <ul>
                         <li><a href="">Стоматология</a></li>
                         <li><a href="">Гинекология</a></li>
                         <li><a href="">Комплексные программы</a></li>
                         <li><a href="">Оздоровление</a></li>
                      </ul>
                   </div>
                </div>
                <div className="row">
                   <div className="col-6">
                      <div className="h">О клинике</div>
                      <ul>
                         <li><a href="">О клинике</a></li>
                         <li><a href="">Врачи</a></li>
                         <li><a href="">Оборудование</a></li>
                         <li><a href="">Цены</a></li>
                      </ul>
                   </div>
                   <div className="col-6">
                      <div className="h">Конаткты</div>
                      <ul>
                         <li><a href="">Контакты</a></li>
                         <li><a href="">Оплатить счет</a></li>
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