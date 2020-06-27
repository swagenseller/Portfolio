import React from "react";
import "../css/social.css";

const Contact = () => {
	return (
		<div className="contact-con">
			<h1>Contact Me</h1>
			<a
				className="ui button linkedin big"
				href="https://www.linkedin.com/in/jeffwagenseller24/"
			>
				<i className="linkedin icon"></i>
				LinkedIn
			</a>
			<a
				className="ui button gh big"
				href="https://github.com/swagenseller?tab=repositories"
			>
				<i className="github icon"></i>
				GitHub
			</a>
			<a className="ui button cp big" href="https://codepen.io/swagen">
				<i className="codepen icon"></i>
				Codepen
			</a>

			<h3>I am not super active on social media...</h3>
			<a
				className="ui button facebook big"
				href="https://www.facebook.com/jeff.wagenseller/"
			>
				<i className="facebook icon"></i>
				Facebook
			</a>
			<a className="ui button ig big" href="https://www.instagram.com/jcwagen/">
				<i className="instagram icon"></i>
				Instagram
			</a>
		</div>
	);
};

export default Contact;
