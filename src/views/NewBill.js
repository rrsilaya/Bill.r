import React, { Component } from 'react';
import { Form, Button, Icon, Header, Message } from 'semantic-ui-react';
import months from '../data/months';

class NewBill extends Component {
	constructor() {
		super();
		this.state = {
			title: "",
			month: "",
			amount: "",
			success: false
		}
	}

	handleChange = (e, { name, value }) => {
		this.setState({[name]: value})
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.addBill(this.state.title, this.state.month, parseInt(this.state.amount, 10));
		
		this.setState({
			title: "",
			month: "",
			amount: "",
			success: true
		})

		setTimeout(() => {
			this.setState({ success: false });
		}, 5000)
	}

	render() {
		return (
			<div>
				<Header as="h1" textAlign="center" icon>
					<Icon name="dollar" circular />
					<Header.Content>New Bill</Header.Content>
				</Header><br />

				<Form size="large" onSubmit={this.handleSubmit}>
					<Form.Group>
						<Form.Input label="Title" placeholder="Bill Title" icon="money"
							iconPosition="left" width={10}
							name="title" value={this.state.title} onChange={this.handleChange}
						/>
						<Form.Select label="Month" placeholder="Month" options={months} width={6}
							name="month" value={this.state.month} onChange={this.handleChange}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Input label="Amount" placeholder="Amount" icon="dollar"
							iconPosition="left" min="0" type="number" width={6}
							name="amount" value={this.state.amount} onChange={this.handleChange}
						/>
					</Form.Group>
					<Button type="submit" content="Add Bill" icon="add" labelPosition="left" primary />
				</Form>
				{
					this.state.success ?
					(
						<Message icon positive>
							<Icon name="check" />
							<Message.Content>
								<Message.Header>Successfully added bill</Message.Header>
								New bill has been added. Please check the overview tab.
							</Message.Content>
						</Message>
					) :
					<div />
				}
			</div>
		);
	}
}

export default NewBill;