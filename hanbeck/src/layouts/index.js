import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/normalize.css"
import "../styles/main.css"


//export const ThemeContext = React.createContext()

class Layout extends React.Component{
	constructor(props) {
	   super(props);
	}
	render(){
		return(
	  		<div className="page-container">
	  			<Header />
				{this.props.children}
	  			<Footer />
	  		</div>
		)
	}
}

export default Layout