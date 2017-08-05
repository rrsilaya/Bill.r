import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';

import ConfirmRemove from './ConfirmRemove';
import '../../App.css';

class ResidentCard extends Component {
  constructor() {
    super();
    this.state = {
      confirmRemove: false
    };
  }

  handleModal = () =>
    this.setState({ confirmRemove: !this.state.confirmRemove });

  render() {
    return (
      <Card>
        <Card.Content>
          <div
            className="img"
            style={{ backgroundImage: `url('${this.props.img}')` }}
          />
          <br />
          <Card.Header>
            {this.props.name}
          </Card.Header>
          <br />
        </Card.Content>
        <Card.Content extra>
          <Button onClick={this.handleModal} negative basic fluid>
            Remove
          </Button>
        </Card.Content>

        <ConfirmRemove
          kind="residents"
          state={this.state.confirmRemove}
          title={this.props.name}
          handleModal={this.handleModal}
          deleteHandle={this.props.deleteResident}
        />
      </Card>
    );
  }
}

export default ResidentCard;
