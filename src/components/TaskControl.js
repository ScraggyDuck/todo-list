import React, { Component } from "react";

import TaskControlSearch from "./TaskControlSearch";
import TaskControlSort from "./TaskControlSort";

export default class TaskControl extends Component {
  render() {
    return (
      <div className="d-flex">
        <TaskControlSearch />
        <TaskControlSort />
      </div>
    );
  }
}
