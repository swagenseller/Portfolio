import React from "react";
import AppCard from "./AppCard";
import { Grid } from "semantic-ui-react";

const apps = [
	{
		id: 0,
		image: require("../images/codenames1.PNG"),
		name: "SpyMaster Randomizer",
		description:
			"This is a simple web app that creates a random board for the Spymaster.",
		demo: "https://swagenseller.github.io/CodeNameRandomizer/",
		github: "https://github.com/swagenseller/CodeNameRandomizer",
	},
	{
		id: 1,
		image: "",
		name: "Fictional Restuarant",
		description: "Website for a fictional resturant of my favorite food",
		demo: "",
		github: "",
	},
	{
		id: 2,
		image: require("../images/ColorGame.PNG"),
		name: "Color Game",
		description: "RGB Color guessing game",
		demo: "",
		github: "https://github.com/swagenseller/ColorGame",
	},
	{
		id: 3,
		image: "",
		name: "Pet Food Table",
		description: "An excel like web app for fictional Pet Food inventory.",
		demo: "",
		github: "https://github.com/swagenseller/ExcellyWebApp",
	},
	{
		id: 4,
		image: "",
		name: "Pennsylvania Map",
		description: "Population density map of Pennsylvania",
		demo: "https://swagenseller.github.io/PennPopulation/",
		github: "https://github.com/swagenseller/PennPopulation",
	},
];

class Projects extends React.Component {
	appList() {
		return apps.map((i) => {
			return (
				<Grid.Column>
					<div key={i.id}>
						<AppCard item={i} />
					</div>
				</Grid.Column>
			);
		});
	}

	render() {
		return (
			<div>
				<h1>Project Page</h1>
				<Grid columns={3}>
					<Grid.Row>{this.appList()}</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default Projects;
