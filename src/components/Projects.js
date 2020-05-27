import React from "react";
import AppCard from "./AppCard";

const apps = [
	{
		id: 0,
		image: "", //require('../images/gem.png'),
		name: "SpyMaster Randomizer",
		description:
			"This is a simple web app that creates a random board for the Spymaster.",
		demo: "",
		github: "https://github.com/swagenseller/CodeNameRandomizer",
	},
	{
		id: 1,
		image: "",
		name: "Pet Food Table",
		description: "An excel like web app for fictional Pet Food inventory.",
		demo: "",
		github: "https://github.com/swagenseller/ExcellyWebApp",
	},
	{
		id: 2,
		image: "",
		name: "Color Game",
		description: "RGB Color guessing game",
		demo: "",
		github: "https://github.com/swagenseller/ColorGame",
	},
];

class Projects extends React.Component {
	appList() {
		return apps.map((i) => {
			return (
				<div key={i.id}>
					<AppCard item={i} />
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<h1>Projects Page</h1>
				{this.appList()}
			</div>
		);
	}
}

export default Projects;
