import React, { Component } from 'react';
import { Table, Statistic, Icon } from 'semantic-ui-react';

import PayBill from '../views/PayBill';

class Bill extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
      activeBill: ''
    };
  }

  handleModal = () =>
    this.setState({ modalOpen: !this.state.modalOpen, activeBill: '' });

  renderPayments = (amount, residents, payment) =>
    this.props.residents.map(resident => {
      if (payment[resident.name.toLowerCase()] === amount) {
        return (
          <Table.Cell key={resident.name}>
            <Icon name="check" color="green" size="large" />
          </Table.Cell>
        );
      } else {
        return (
          <Table.Cell key={resident.name} selectable>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                this.handleModal();
                this.setState({ activeBill: resident.name });
                return false;
              }}>
              {payment[resident.name.toLowerCase()] == null
                ? <Icon name="cancel" color="red" size="large" />
                : 'P' +
                  (amount - payment[resident.name.toLowerCase()]) +
                  ' left'}
            </a>
          </Table.Cell>
        );
      }
    });

  render() {
    const { title, amount, month, payment } = this.props.bills;

    return (
      <Table.Row>
        <Table.Cell>
          <Statistic size="mini">
            <Statistic.Value>
              {title}
            </Statistic.Value>
            <Statistic.Label>
              P{amount} / {month}
            </Statistic.Label>
          </Statistic>
        </Table.Cell>
        {this.renderPayments(amount, this.props.residents, payment)}
        <PayBill
          title={title}
          amount={amount}
          month={month}
          modalOpen={this.state.modalOpen}
          handleModal={this.handleModal}
          activeBill={this.state.activeBill}
          payBill={this.props.payBill}
          paymentSuccess={this.props.paymentSuccess}
        />
      </Table.Row>
    );
  }
}

export default Bill;
