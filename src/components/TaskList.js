import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  render() {
    return (
      <>
        <div className="task-wrapper">
          {this.props.tasks.map((task, index) => (
            <TaskItem
              key={index}
              taskItem={task}
              id={index}
              deleteTask={this.props.deleteTask}
              editTask={this.props.editTask}
              toggleTask={this.props.toggleTask}
            />
          ))}
        </div>
      </>
    );
  }
}

export default TaskList;
