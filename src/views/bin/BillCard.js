import React, { Component } from 'react';
import { Header, Segment, Button } from 'semantic-ui-react';

import ConfirmRemove from './ConfirmRemove';

class BillCard extends Component {
	constructor() {
		super();
		this.state = {
			confirmRemove: false
		}
	}

	handleModal = () => this.setState({ confirmRemove: !this.state.confirmRemove });

	render() {
		return (
			<div>
				<Segment.Group horizontal>
					<Segment>
						<Header as="h3">{this.props.title}</Header>
						{this.props.month} / Php {this.props.amount}.00 / {this.props.unpaidResidents} Residents Unpaid
					</Segment>
					<Button attached="right" icon="x" onClick={this.handleModal} negative />
				</Segment.Group>
				<ConfirmRemove kind="bills" state={this.state.confirmRemove} title={this.props.title} month={this.props.month}
					handleModal={this.handleModal} deleteHandle={this.props.deleteBill} />
			</div>
		);
	}
}

export default BillCard;