import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const AppCard = (props) => {
	return (
		<Card>
			<Image src={props.item.image} wrapped ui={false} />
			<Card.Content>
				<Card.Header>{props.item.name}</Card.Header>
				<Card.Description>{props.item.description}</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<div class="ui horizontal segments">
					<a className="ui segment" href={props.item.github}>
						<Icon name="github">GitHub</Icon>
					</a>
					{props.item.demo.length > 0 && (
						<a className="ui segment" href={props.item.demo}>
							Demo
						</a>
					)}
				</div>
			</Card.Content>
		</Card>
	);
};

export default AppCard;
