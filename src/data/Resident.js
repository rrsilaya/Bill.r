import React, { Component } from 'react';
import { Table, Image } from 'semantic-ui-react';

class Resident extends Component {
	render() {
		return (
			<Table.HeaderCell><Image src={this.props.img} avatar /> {this.props.name}</Table.HeaderCell>
		);
	}
}

export default Resident;