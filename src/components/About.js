import React from "react";

const profileImage = require("../images/profileSmlr.jpg");
const About = () => {
	return (
		<div className="about">
			<div className="ui medium circular image" height="500px">
				<img src={profileImage} alt="J" />
			</div>

			<h1>Hi, my name is Jeff Wagenseller</h1>
			<div className="info">
				<p>
					I am an aspiring developer looking for opportunities in Web
					Development and Software Engineering.
				</p>
				<p>
					I have achieved a Bachelor's of Science in Computer Science and I
					continue to take online classes and work on side projects to expand my
					skills.
				</p>

				<p className="info">
					I also like to spend my free time playing games, cooking, wakeboarding
					and playing tennis.
				</p>
			</div>
		</div>
	);
};

export default About;
