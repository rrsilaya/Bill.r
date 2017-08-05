import React, { Component } from 'react';
import { Header, Form, Icon, Button, Message } from 'semantic-ui-react';

class AddResident extends Component {
  constructor() {
    super();
    this.state = {
      residentName: '',
      residentPhoto: '',
      success: false
    };
  }

  handleFormChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if (this.state.residentName !== '') {
      if (this.state.residentPhoto)
        this.props.addResident(
          this.state.residentName,
          this.state.residentPhoto
        );
      else
        this.props.addResident(
          this.state.residentName,
          'avatar-placeholder.png'
        );

      this.setState({
        residentName: '',
        residentPhoto: '',
        success: true
      });

      setTimeout(() => {
        this.setState({ success: false });
      }, 5000);
    }
  };

  render() {
    return (
      <div>
        <Header as="h1" textAlign="center" icon>
          <Icon name="users" circular />
          <Header.Content>Add Resident</Header.Content>
        </Header>
        <br />

        <Form size="large" onSubmit={this.handleFormSubmit}>
          <Form.Group>
            <Form.Input
              label="Name"
              placeholder="Resident's Name"
              icon="user"
              iconPosition="left"
              width={10}
              name="residentName"
              value={this.state.residentName}
              onChange={this.handleFormChange}
            />
            <Form.Input
              label="Photo (optional)"
              placeholder="Link of Image"
              icon="file image outline"
              iconPosition="left"
              width={6}
              name="residentPhoto"
              value={this.state.residentPhoto}
              onChange={this.handleFormChange}
            />
          </Form.Group>

          <Button
            type="submit"
            content="Add Resident"
            icon="add"
            labelPosition="left"
            primary
          />
        </Form>
        {this.state.success
          ? <Message icon positive>
              <Icon name="check" />
              <Message.Content>
                <Message.Header>Successfully added resident</Message.Header>
                New resident has been added. Please check the overview tab.
              </Message.Content>
            </Message>
          : <div />}
      </div>
    );
  }
}

export default AddResident;
