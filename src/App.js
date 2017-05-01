import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import './App.css';
import 'semantic-ui-css/semantic.css';
import residentsDummy from './data/residents-dummy';
import billsDummy from './data/bills-dummy';

import Header from './bin/TopHeader';
import Navigation from './bin/Navigation';

import Overview from './views/Overview';
import AddResident from './views/AddResident';

class App extends Component {
	constructor() {
		super();
		this.state = {
			activeTab: "add-resident",
			residents: residentsDummy,
			bills: billsDummy
		}
	}

	changeTab = (e, { name }) => this.setState({ activeTab: name });
	setView = () => {
		const { activeTab, residents, bills } = this.state;

		if(activeTab === "overview") return (
			<Overview residents={residents} bills={bills} />
		);
		else if(activeTab === "add-resident") return (
			<AddResident />
		);
		else return (<div></div>);
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
