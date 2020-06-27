import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: "contactMe",
		};
	}
	render() {
		return (
			<div className="ui secondary pointing inverted menu">
				<NavLink to="/about" className="item">
					About
				</NavLink>
				<NavLink to="/contactMe" className="item">
					Contact
				</NavLink>
				<div className="right menu">
					<NavLink exact to="/" className="item">
						Projects
					</NavLink>
				</div>
			</div>
		);
	}
}

export default Header;
