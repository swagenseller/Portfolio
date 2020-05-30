import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
	render() {
		return (
			<div className="ui secondary pointing menu">
				<Link to="/about" className="item">
					About
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
