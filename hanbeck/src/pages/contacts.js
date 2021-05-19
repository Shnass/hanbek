import React from "react"
import GoogleMapReact from 'google-map-react'
import { graphql } from 'gatsby'
import sprite from "../images/sprite.svg"

// markup

const MapMarker = ({ text }) => <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
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

  console.log(props)

  const { 
  	address,
  	facebook,
  	instagram,
  	location,
  	coordinates,
  	phone,
  	workhours
  } = props.data.strapiContactData

  console.log(coordinates)

  return (
    <main>
      <section className="section section-wide map-section mb0">
         <div className="block photo">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyAxuAI18ikDa3aDno6bbE5q3uvLZ75udeY" }}
              defaultCenter={{lat: +coordinates.split(';')[0],lng: +coordinates.split(';')[1]}}
              defaultZoom={11}
            >
              <MapMarker
                lat={coordinates.split(';')[0]}
                lng={coordinates.split(';')[1]}
                text="Клиника Ханбека"
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
                     {address}</address>
                    <address>
                    <a href={"tel:+"+phone.match(/\d+/g).join('')}>
                     <svg className="inline-svg-icon">
                       <use href={sprite+"#phone"}></use>
                     </svg>
                     {phone}
                     </a>
                     </address>
              </div>
              <div className="address-group">
                    <address>
                    <a href={"https://www.instagram.com/"+instagram} target="_blank">
                     <svg className="inline-svg-icon">
                       <use href={sprite+"#instagram"}></use>
                     </svg>
                    @{instagram}
                    </a>
                    </address>
                    <address>
                    <a href={"http://facebook.com/"+facebook} target="_blank">
                     <svg className="inline-svg-icon">
                       <use href={sprite+"#facebook"}></use>
                     </svg>
                    {facebook}
                    </a>
                    </address>
              </div>
              <div className="address-group">
                    <address>
                     <svg className="inline-svg-icon">
                       <use href={sprite+"#geo"}></use>
                     </svg>
                    {location}</address>
                    <address>
                     <svg className="inline-svg-icon">
                       <use href={sprite+"#time"}></use>
                     </svg>
                    График работы: {workhours}</address>
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

export const addressQuery = graphql`
  query addressQuery {
    strapiContactData {
    	address
    	facebook
    	instagram
    	location
    	coordinates
    	phone
    	workhours
    }
  }
`

export default ContactsPage