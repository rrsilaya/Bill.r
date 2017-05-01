import React, { Component } from 'react';
import { Header, Form, Icon } from 'semantic-ui-react';

class AddResident extends Component {
	render() {
		return (
			<div>
				<Header as="h1" textAlign="center" icon>
					<Icon name="users" circular />
					<Header.Content>Add Resident</Header.Content>
				</Header>

				<Form><Form.Group>
					<Form.Input label="Name" placeholder="Resident's Name" icon="user" iconPosition="left" width={10} />
					<Form.Input label="Photo (optional)" placeholder="Link of Image" icon="file image outline" iconPosition="left" labelPosition="right corner" width={6} />
				</Form.Group></Form>
			</div>
		);
	}
}

export default AddResident;