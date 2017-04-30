import React, { Component } from 'react';
import { Table, Statistic, Icon } from 'semantic-ui-react';

class Bill extends Component {
	renderPayments = (amount, residents, payment) =>
		this.props.residents.map((resident, i) => {
			if(payment[resident.name.toLowerCase()] != null) {
				return <Table.Cell key={i}>{
					payment[resident.name.toLowerCase()] === amount ?
					<Icon name="check" color="green" size="large" /> :
					"P" + (amount - payment[resident.name.toLowerCase()]) + " left"
				}</Table.Cell>;
			} else return <Table.Cell key={i}><Icon name="cancel" color="red" size="large" /></Table.Cell>;
		})

	render() {
		const {title, amount, month, payment} = this.props.bills;

		return (
			<Table.Row>
				<Table.Cell>
					<Statistic size="mini">
						<Statistic.Value>{title}</Statistic.Value>
						<Statistic.Label>P{amount} / {month}</Statistic.Label>
					</Statistic>
				</Table.Cell>
				{this.renderPayments(amount, this.props.residents, payment)}
			</Table.Row>
		);
	}
}

export default Bill;