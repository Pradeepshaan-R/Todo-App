import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.taskItem.task,
      isEditing: false,
    };
  }

  setEditingState = (isEditing) => {
    this.setState({ isEditing: isEditing });
  };

  toggleTask = () => {
    this.props.toggleTask(this.props.id);
  };

  deleteTask = () => {
    this.props.deleteTask(this.props.id);
  };

  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.editTask(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  };

  render() {
    return (
      <Card
        style={{
          maxWidth: "345px",
          background: "rgba(153, 214, 255, 0.9)",
          marginTop: "20px",
        }}
      >
        {this.state.isEditing ? (
          <>
            <form onSubmit={this.handleSubmit} className="edit-todo">
              <TextField
                type="text"
                label="Edit Todo"
                variant="filled"
                value={this.state.task}
                onChange={this.handleChange}
                autoFocus
              />

              <div className="edit-btn">
                <Button type="submit" variant="contained" color="primary">
                  SAVE
                </Button>
                <Button
                  type="button"
                  onClick={() => this.setEditingState(false)}
                  variant="contained"
                  color="primary"
                >
                  BACK
                </Button>
              </div>
            </form>
          </>
        ) : (
          <>
            <div className="wrapper">
              <CardContent className="todo-1">
                <Typography gutterBottom variant="h5" component="h2">
                  Task
                </Typography>
                <Typography
                  onChange={this.toggleTask}
                  variant="body2"
                  // color="textSecondary"
                  component="p"
                  className="task"
                >
                  <input
                    type="checkbox"
                    readonly
                    checked={this.props.taskItem.isCompleted}
                  />
                  <span
                    className={
                      this.props.taskItem.isCompleted
                        ? "completed"
                        : "not-completed"
                    }
                  >
                    {this.props.taskItem.task}
                  </span>
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="secondary"
                  onClick={this.deleteTask}
                >
                  DELETE
                </Button>
                <Button
                  size="small"
                  color="secondary"
                  onClick={() => this.setEditingState(true)}
                >
                  EDIT
                </Button>
              </CardActions>
            </div>
          </>
        )}
      </Card>
    );
  }
}

export default TaskItem;
