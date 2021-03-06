import React from "react";
import AppCard from "./AppCard";
import { Grid } from "semantic-ui-react";

const apps = [
	{
		id: 0,
		image: require("../images/restaurant.JPG"),
		name: "Fictional Restuarant",
		description: "Website for a fictional restaurant of my favorite food",
		demo: "https://template-restuarant.herokuapp.com/",
		github: "",
	},
	{
		id: 1,
		image: require("../images/fossilGameSm.JPG"),
		name: "Fossil Finders",
		description: "2-player strategy board game",
		demo: "http://swagenseller.github.io/Fossilfinders",
		github: "https://github.com/swagenseller/Fossilfinders",
	},
	{
		id: 2,
		image: require("../images/excelLikeApp.JPG"),
		name: "Excel Like App",
		description: "An excel like web app for fictional Pet Food inventory.",
		demo: "",
		github: "https://github.com/swagenseller/ExcellyWebApp",
	},
	{
		id: 3,
		image: require("../images/PennPopImage.PNG"),
		name: "Pennsylvania Map",
		description: "Population density map of Pennsylvania",
		demo: "https://swagenseller.github.io/PennPopulation/",
		github: "https://github.com/swagenseller/PennPopulation",
	},

	{
		id: 4,
		image: require("../images/codenames1.PNG"),
		name: "SpyMaster Randomizer",
		description:
			"This is a simple web app that creates a random board for the Spymaster.",
		demo: "https://swagenseller.github.io/CodeNameRandomizer/",
		github: "https://github.com/swagenseller/CodeNameRandomizer",
	},
	{
		id: 5,
		image: require("../images/ColorGame.PNG"),
		name: "Color Game",
		description: "RGB Color guessing game",
		demo: "",
		github: "https://github.com/swagenseller/ColorGame",
	},
];

class Projects extends React.Component {
	appList(apps) {
		return apps.map((i) => {
			return (
				<Grid.Column key={i.id}>
					<AppCard item={i} />
				</Grid.Column>
			);
		});
	}

	render() {
		return (
			<div>
				<h1>Project Page</h1>
				<Grid stackable container columns={3} className="grid-con">
					<Grid.Row>{this.appList(apps.slice(0, 3))}</Grid.Row>
					<Grid.Row>{this.appList(apps.slice(3, 6))}</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default Projects;
