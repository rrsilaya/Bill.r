import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

class Navigation extends Component {
	render() {
		const { activeTab } = this.props.state;

		return (
			<div>
				<Menu pointing secondary>
					<Menu.Item name="overview" active={activeTab === "overview"} onClick={this.props.changeTab} />
					<Menu.Item name="list" active={activeTab === "list"} onClick={this.props.changeTab} />

					<Menu.Menu position="right">
						<Menu.Item name="add-resident" active={activeTab === "add-resident"} onClick={this.props.changeTab}>
							<Icon name="user" /> Add Resident
						</Menu.Item>
						<Menu.Item name="new-bill" active={activeTab === "new-bill"} onClick={this.props.changeTab}>
							<Icon name="add" /> New Bill
						</Menu.Item>
					</Menu.Menu>
				</Menu>
			</div>
		);
	}
}

export default Navigation;