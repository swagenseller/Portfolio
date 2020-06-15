import React from "react";
import "../css/social.css";

const Contact = () => {
	return (
		<div>
			<h1>Contact Me</h1>
			<a
				className="ui button lk"
				href="https://www.linkedin.com/in/jeffwagenseller24/"
			>
				LinkedIn
			</a>
			<a
				className="ui button gh"
				href="https://github.com/swagenseller?tab=repositories"
			>
				GitHub
			</a>
			<a className="ui button cp" href="https://codepen.io/swagen">
				Codepen
			</a>

			<h3>I am not super active on social media...</h3>
			<a
				className="ui button fb"
				href="https://www.facebook.com/jeff.wagenseller/"
			>
				Facebook
			</a>
			<a className="ui button ig" href="https://www.instagram.com/jcwagen/">
				Instagram
			</a>
		</div>
	);
};

export default Contact;
