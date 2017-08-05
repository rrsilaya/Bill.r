import React, { Component } from 'react';
import { Modal, Icon, Header, Button } from 'semantic-ui-react';

class ConfirmRemove extends Component {
  handleDelete = () => {
    if (this.props.kind === 'residents') {
      this.props.deleteHandle(this.props.title);
    } else {
      this.props.deleteHandle(this.props.title, this.props.month);
    }

    this.props.handleModal();
  };

  render() {
    return (
      <Modal
        open={this.props.state}
        onClose={this.props.handleModal}
        closeOnRootNodeClick={false}
        size="small"
        basic>
        <Header>
          <Icon name="x" />Remove {this.props.title}
          {this.props.month ? ` (${this.props.month}) ` : ''} from{' '}
          {this.props.kind}?
        </Header>
        <Modal.Content>
          <Header as="h3" textAlign="center" inverted>
            You are about to remove {this.props.title} from Bill.r.
          </Header>
        </Modal.Content>

        <Modal.Actions>
          <Button basic inverted onClick={() => this.props.handleModal()}>
            <Icon name="remove" /> Cancel
          </Button>
          <Button color="red" inverted onClick={this.handleDelete}>
            <Icon name="checkmark" /> Delete
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ConfirmRemove;
