import React, { Component } from 'react';
import { Statistic, Icon } from 'semantic-ui-react';

class Stats extends Component {
	render() {
		return (
			<Statistic.Group widths="three">
				<Statistic>
					<Statistic.Value>{this.props.unpaidBills}</Statistic.Value>
					<Statistic.Label>Unpaid Bills</Statistic.Label>
				</Statistic>
				<Statistic>
					<Statistic.Value>P1000</Statistic.Value>
					<Statistic.Label>Total Unpaid</Statistic.Label>
				</Statistic>
				<Statistic>
					<Statistic.Value><Icon name="users" /> {this.props.residents}</Statistic.Value>
					<Statistic.Label>Residents</Statistic.Label>
				</Statistic>
			</Statistic.Group>
		);
	}
}

export default Stats;