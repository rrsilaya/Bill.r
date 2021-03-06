import React, { Component } from 'react';
import { Message, Icon } from 'semantic-ui-react';

import Stats from './bin/Stats';
import Summary from './bin/Summary';

class Overview extends Component {
  render() {
    return (
      <div>
        <Stats
          residents={this.props.residents.length}
          unpaidBills={this.props.bills.length}
          calcUnpaid={this.props.calcUnpaid}
        />
        <br />
        {this.props.alert
          ? <Message positive icon>
              <Icon name="check" />
              <Message.Content>
                <Message.Header>All Residents Paid</Message.Header>
                Congratulations, all residents paid the bill!
              </Message.Content>
            </Message>
          : <div />}
        {this.props.residents.length === 0 || this.props.bills.length === 0
          ? this.props.residents.length === 0
            ? <Message warning icon>
                <Icon name="remove user" />
                <Message.Content>
                  <Message.Header>Nothing to see here</Message.Header>
                  It looks like you haven't added any resident yet.
                </Message.Content>
              </Message>
            : <Message positive icon>
                <Icon name="money" />
                <Message.Content>
                  <Message.Header>All bills paid</Message.Header>
                  Congratulations, all pending bills are paid. Please add more
                  bills to be paid.
                </Message.Content>
              </Message>
          : <Summary
              residents={this.props.residents}
              bills={this.props.bills}
              payBill={this.props.payBill}
              paymentSuccess={this.props.paymentSuccess}
            />}
      </div>
    );
  }
}

export default Overview;
