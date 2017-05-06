import React, { Component } from 'react';
import { Header, Icon, Card, Message } from 'semantic-ui-react';

import ResidentCard from './bin/ResidentCard';
import BillCard from './bin/BillCard';

class OverviewList extends Component {
	render() {
		return (
			<div>
				<Header as="h1" dividing>
					<Icon name="users" />
					<Header.Content>
						Residents
						<Header.Subheader>People Living with You</Header.Subheader>
					</Header.Content>
				</Header><br/>
				<Card.Group itemsPerRow={4}>
					{
						this.props.residents.length === 0?
						<Message warning icon>
							<Icon name="remove user" />
							<Message.Content>
								<Message.Header>Nothing to see here</Message.Header>
								It looks like you haven't added any resident yet.
							</Message.Content>
						</Message> :
						<div/>
					}
					{
						this.props.residents.map((resident, i) => 
							<ResidentCard key={i} name={resident.name} img={resident.img} deleteResident={this.props.deleteResident} />
						)
					}
				</Card.Group><br/>

				<Header as="h1" dividing>
					<Icon name="dollar" />
					<Header.Content>
						Bills
						<Header.Subheader>Bills to Pay</Header.Subheader>
					</Header.Content>
				</Header>
				{
					this.props.bills.length === 0 ?
					(
						<Message positive icon>
							<Icon name="money" />
							<Message.Content>
								<Message.Header>All bills paid</Message.Header>
								Congratulations, all pending bills are paid. Please add more bills to be paid.
							</Message.Content>
						</Message>
					)
					:
					<div/>
				}
				{
					this.props.bills.map((bill, i) =>
						<BillCard key={i} title={bill.title} amount={bill.amount} month={bill.month}
							unpaidResidents={this.props.residents.length - Object.keys(bill.payment).length}
							deleteBill={this.props.deleteBill} />
					)
				}
			</div>
		);
	}
}

export default OverviewList;