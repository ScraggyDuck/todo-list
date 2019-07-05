import React, { Component } from "react";
import { connect } from "react-redux";

import { Table, Form } from "react-bootstrap";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterLevel: -1,
      filterStatus: -1
    };
  }
  onChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.props.onFilter(
      name === "filterName" ? value : this.state.filterName,
      name === "filterLevel" ? value : this.state.filterLevel,
      name === "filterStatus" ? value : this.state.filterStatus
    );
    this.setState({
      [name]: value
    });
  };
  render() {
    const { tasks } = this.props;
    const { filterName, filterLevel, filterStatus } = this.state;
    const elmTasks = tasks.map((task, index) => (
      <TaskItem key={task.id} index={index} task={task} />
    ));
    return (
      <Table bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên công việc</th>
            <th>Mức độ</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            <td>
              <Form.Control
                name="filterName"
                value={filterName}
                onChange={this.onChange}
                type="search"
              />
            </td>
            <td>
              <Form.Control
                name="filterLevel"
                value={filterLevel}
                onChange={this.onChange}
                as="select"
              >
                <option value={-1}>Tất cả</option>
                <option value={0}>Thấp</option>
                <option value={1}>Trung bình</option>
                <option value={2}>Cao</option>
              </Form.Control>
            </td>
            <td>
              <Form.Control
                name="filterStatus"
                value={filterStatus}
                onChange={this.onChange}
                as="select"
              >
                <option value={-1}>Tất cả</option>
                <option value={0}>Chưa hoàn thành</option>
                <option value={1}>Hoàn thành</option>
              </Form.Control>
            </td>
            <td />
          </tr>
          {elmTasks}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => ({ tasks: state.tasks });
export default connect(
  mapStateToProps,
  null
)(TaskList);
