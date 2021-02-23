import React from "react"
import GoogleMapReact from 'google-map-react';

import sprite from "../images/sprite.svg"

// markup

const AnyReactComponent = ({ text }) => <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5506 29.7506C14.922 23.5659 16.3123 16.4045 21.0642 11.6526C27.4996 5.21724 37.9334 5.21721 44.3687 11.6526C49.1206 16.4045 50.5109 23.5659 47.8822 29.7507L32.7162 65.4329L17.5506 29.7506Z" fill="#5539BE"/>
<circle cx="32.737" cy="23.8772" r="8.06275" fill="white"/>
</svg>;
 
// class SimpleMap extends Component {
  
 
//   render() {
//     return (
//       // Important! Always set the container height explicitly
//     );
//   }
// }
 
// export default SimpleMap;


function ContactsPage(props){
  return (
    <main>
      <section className="section section-wide map-section mb0">
         <div className="block photo">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyAxuAI18ikDa3aDno6bbE5q3uvLZ75udeY" }}
              defaultCenter={{lat: 59.95,lng: 30.33}}
              defaultZoom={11}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
         </div>
         <div className="block bg-grey banner-side">
         <div className="block-w">
           <div className="banner-side-text">
              <h2>Наш адрес</h2>               
              <div className="address-group">
                    <address>
                     <svg className="inline-svg-icon">
                       <use href={sprite+"#geo"}></use>
                     </svg>
                     г. Москва, ул. Шаболовская, д.1</address>
                    <address>
                     <svg className="inline-svg-icon">
                       <use href={sprite+"#phone"}></use>
                     </svg>
                     +7 (495) 111 22 33</address>
              </div>
              <div className="address-group">
                    <address>
                     <svg className="inline-svg-icon">
                       <use href={sprite+"#instagram"}></use>
                     </svg>
                    @ecoklinika</address>
                    <address>
                     <svg className="inline-svg-icon">
                       <use href={sprite+"#facebook"}></use>
                     </svg>
                    ecoklinika.msc</address>
              </div>
              <div className="address-group">
                    <address>
                     <svg className="inline-svg-icon">
                       <use href={sprite+"#geo"}></use>
                     </svg>
                    5 минут пешком от станции “Октябрьская”</address>
                    <address>
                     <svg className="inline-svg-icon">
                       <use href={sprite+"#time"}></use>
                     </svg>
                    График работы: 08:00 - 18:00 Пн-Пт</address>
              </div>
              <p>
                    <a href="" className="btn btn-reg btn-blue">Записаться на прием</a>
              </p>
           </div>
         </div>
         </div>
      </section>
    </main>
  )
}

export default ContactsPage