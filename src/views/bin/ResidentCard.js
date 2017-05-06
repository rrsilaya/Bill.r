import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';

import '../../App.css';

class ResidentCard extends Component {
	render() {
		return (
			<Card>
				<Card.Content>
					<div className="img" style={{backgroundImage: `url('${this.props.img}')`}} />
					<br/>
					<Card.Header>{this.props.name}</Card.Header>
					<br/>
					P1200.00 unpaid</Card.Content>
				<Card.Content extra>
					<Button onClick={() => this.props.deleteResident(this.props.name)} negative basic fluid>Remove</Button>
				</Card.Content>
			</Card>
		);
	}
}

export default ResidentCard;