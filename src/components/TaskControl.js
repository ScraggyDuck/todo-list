import React, { Component } from "react";

import TaskControlSearch from "./TaskControlSearch";
import TaskControlSort from "./TaskControlSort";

export default class TaskControl extends Component {
  render() {
    const { onSearch, onSort } = this.props;
    return (
      <div className="d-flex">
        <TaskControlSearch onSearch={onSearch} />
        <TaskControlSort onSort={onSort} />
      </div>
    );
  }
}
