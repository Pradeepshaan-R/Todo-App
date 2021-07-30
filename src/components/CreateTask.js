import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";

class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }

  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.createTask(this.state.task);
    this.setState({ task: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="add-todo">
        <TextField
          type="text"
          label="Add a Todo"
          variant="outlined"
          value={this.state.task}
          onChange={this.handleChange}
          autoFocus
        />

        <Button type="submit" variant="contained" color="primary">
          Add Todo
        </Button>
      </form>
    );
  }
}

export default CreateTask;
