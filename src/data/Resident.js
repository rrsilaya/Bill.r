import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class Resident extends Component {
	render() {
		return (
			<Table.HeaderCell>{this.props.name}</Table.HeaderCell>
		);
	}
}

export default Resident;