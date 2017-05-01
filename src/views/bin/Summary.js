import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

import Resident from '../../data/Resident';
import Bill from '../../data/Bill';

class Summary extends Component {
	render() {
		return (
			<Table textAlign="center" definition padded fixed celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell />
						{
							this.props.residents.map((resident, i) => <Resident key={i} name={resident.name} img={resident.img} />)
						}
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{
						this.props.bills.map((bill, i) => <Bill key={i} bills={bill} residents={this.props.residents} />)
					}
				</Table.Body>
			</Table>
		);
	}
}

export default Summary;