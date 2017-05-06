import React, { Component } from 'react';
import { Header, Segment, Button } from 'semantic-ui-react';

class BillCard extends Component {
	render() {
		return (
			<div>
				<Segment.Group horizontal>
					<Segment>
						<Header as="h3">{this.props.title}</Header>
						{this.props.month} / Php {this.props.amount}.00 / {this.props.unpaidResidents} Residents Unpaid
					</Segment>
					<Button attached="right" icon="x" onClick={() => this.props.deleteBill(this.props.title, this.props.month)} negative />
				</Segment.Group>
			</div>
		);
	}
}

export default BillCard;