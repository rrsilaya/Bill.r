import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import './App.css';
import 'semantic-ui-css/semantic.css';

import Header from './bin/TopHeader';
import Navigation from './bin/Navigation';

import Overview from './views/Overview';
import AddResident from './views/AddResident';
import NewBill from './views/NewBill';
import OverviewList from './views/OverviewList';

class App extends Component {
	constructor() {
		super();
		this.state = {
			activeTab: "overview",
			residents: [],
			bills: [],
			alert: false
		}
	}

	componentDidMount = () => {
		const state = JSON.parse(localStorage.getItem('bill.r'));
		
		if(state != null) {
			this.setState({
				residents: state.residents,
				bills: state.bills
			})
		}
	}

	saveState = () => localStorage.setItem('bill.r', JSON.stringify(this.state));

	allResidentsPaid = (billTitle) => {
		var allResidentsPaid = true;

		this.state.bills.map(bill => {
			if(bill.title === billTitle) {
				allResidentsPaid = !this.state.residents.some(resident => {
					return !(bill.payment[resident.name.toLowerCase()] != null && bill.payment[resident.name.toLowerCase()] === bill.amount)
				});
			}

			return bill;
		});

		// Delete
		if(allResidentsPaid) {
			this.setState({
				bills:
					this.state.bills.filter(bill => {
						return bill.title !== billTitle;
					})
			})

			this.setState({ alert: true });
			setTimeout(() => {
				this.setState({ alert: false });				
			}, 3000)
		}
	}

	payBill = (billTitle, month, resident, amount) => {
		var updatedAmt, success;

		this.setState({ bills: this.state.bills.map(bill => {
			if(bill.title.toLowerCase() === billTitle.toLowerCase() && bill.month === month) {
				if(bill.payment[resident.toLowerCase()] != null) {
					updatedAmt = bill.payment[resident.toLowerCase()] + amount;
				} else updatedAmt = amount;

				if(amount <= 0 || updatedAmt > bill.amount) {
					success = false;
				} else {
					bill.payment[resident.toLowerCase()] = updatedAmt;
					success = true;
				}
			}

			return bill;
		})});

		this.allResidentsPaid(billTitle);
		this.saveState();
		console.log(this.state);
		return success;
	}

	addResident = (name, img) => {
		this.setState({
			residents: [...this.state.residents, {name, img}]
		})
		this.saveState();
	}

	addBill = (title, month, amount) => {
		this.setState({
			bills: [...this.state.bills, { title, month, amount, payment: {}}]
		})
		this.saveState();
	}

	calcUnpaid = () => {
		var unpaid = 0;

		this.state.bills.forEach(bill => {
			unpaid += bill.amount * this.state.residents.length;

			for(var key in bill.payment) unpaid -= bill.payment[key];
		})

		return unpaid;
	}

	deleteResident = name => {
		this.setState({
			residents: this.state.residents.filter(resident => {return resident.name !== name})
		})
		this.saveState();
	}

	deleteBill = (title, month) => {
		this.setState({
			bills: this.state.bills.filter(bill => {return bill.title !== title || bill.month !== month})
		})
		this.saveState();
	}

	changeTab = (e, { name }) => this.setState({ activeTab: name });
	setView = () => {
		const { activeTab, residents, bills } = this.state;

		if(activeTab === "overview") return (
			<Overview residents={residents} bills={bills} payBill={this.payBill} alert={this.state.alert} calcUnpaid={this.calcUnpaid} paymentSuccess={this.state.paymentSuccess} />
		);
		else if(activeTab === "add-resident") return (
			<AddResident addResident={this.addResident} />
		);
		else if(activeTab === "new-bill") return (
			<NewBill addBill={this.addBill} />
		);
		else if(activeTab === "overview-list") return (
			<OverviewList residents={this.state.residents} bills={this.state.bills} deleteResident={this.deleteResident} deleteBill={this.deleteBill} />
		);
	}

	render() {
		return (
			<div className="container">
				<Header />
				<Navigation state={this.state} changeTab={this.changeTab} />

				<Segment padded>
					{this.setView()}
				</Segment>
			</div>
		);
	}
}

export default App;
