import React, { Component } from "react";
import { Button, Badge } from "react-bootstrap";

import { connect } from "react-redux";
import {
  onUpdateStatus,
  onDelete,
  onUpdate,
  onShowForm,
  onCloseForm
} from "../actions/index";

class TaskItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  };

  onDelete = () => {
    this.props.onDelete(this.props.task.id);
    this.props.onCloseForm();
  };

  onUpdate = () => {
    this.props.onShowForm();
    this.props.onUpdate(this.props.task);
  };

  render() {
    const { index, task } = this.props;
    let elmLevel = <Badge variant="danger">Cao</Badge>;
    if (task.level === 0) elmLevel = <Badge variant="success">Thấp</Badge>;
    else if (task.level === 1)
      elmLevel = <Badge variant="warning">Trung bình</Badge>;
    return (
      <tr className={task.isCompleted ? "isCompleted" : ""}>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td>{elmLevel}</td>
        <td>
          <Badge
            onClick={this.onUpdateStatus}
            variant={task.isCompleted ? "success" : "danger"}
          >
            {task.isCompleted ? "Hoàn thành" : "Chưa hoàn thành"}
          </Badge>
        </td>
        <td>
          <div className="d-flex justify-content-center">
            <Button onClick={this.onUpdate} variant="success" className="mr-3">
              Sửa
            </Button>
            <Button onClick={this.onDelete} variant="danger">
              Xóa
            </Button>
          </div>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onUpdateStatus: id => dispatch(onUpdateStatus(id)),
  onDelete: id => dispatch(onDelete(id)),
  onUpdate: task => dispatch(onUpdate(task)),
  onShowForm: () => dispatch(onShowForm()),
  onCloseForm: () => dispatch(onCloseForm())
});

export default connect(
  null,
  mapDispatchToProps
)(TaskItem);
