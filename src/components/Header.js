import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
	/*(props){
		super(props)
		this.state ={
			toggle = ["", "", "active"]
		}

	}*/
	render() {
		return (
			<div className="ui secondary pointing menu">
				<Link to="/about" className="item">
					About
				</Link>
				<Link to="/contactMe" className="item">
					Contact
				</Link>
				<div className="right menu">
					<Link to="/" className="item active">
						Projects
					</Link>
				</div>
			</div>
		);
	}
}

export default Header;
