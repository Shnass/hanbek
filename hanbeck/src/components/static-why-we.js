import React from "react"
import Section from "./section"

function StaticWhyWe(props){
    return(
      <Section title={"Наши принципы"} classes={"section bg-purple inverse mb0 tt"}>
         <div className="w">
         <div className="row why-we">
            <div className="col-4 col-md-12">
               <h3 className="h2">Почему выбирают экоклинику?</h3>
            </div>
            <div className="col-4 col-md-12">
               <p>Нас часто называют нетрадиционной или альтернативной медициной. Мы же придерживаемся обратной точки зрения – наши практики как раз и есть самые, что ни на есть традиционные. Мы исходим из постулата, что красота и здоровье это единая целостная система организма</p>
            </div>
            <div className="col-4 col-md-12">
               <p>Специалисты клиники используют комплексный подход в работе с подопечными. Каждый план оздоровления разрабатывается индивидуально, с учетом общего состояния здоровья, цели человека, особенностей организма и “экстренности” (степени) развития недуга.</p>
               <p>Мы не занимаемся лечением, мы делаем вас здоровыми!</p>     
            </div>
         </div>
         </div>
      </Section>
    )
}

export default StaticWhyWe