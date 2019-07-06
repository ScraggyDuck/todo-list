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
    if (name === "filterLevel" || name === "filterStatus") {
      this.setState({
        [name]: parseInt(value, 10)
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  render() {
    let { tasks } = this.props;
    const { filterName, filterLevel, filterStatus } = this.state;
    //Filter
    tasks = tasks.filter(
      task => task.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
    if (filterLevel !== -1)
      tasks = tasks.filter(task => task.level === parseInt(filterLevel, 10));
    if (filterStatus !== -1)
      tasks = tasks.filter(
        task =>
          task.isCompleted === (parseInt(filterStatus, 10) === 1 ? true : false)
      );

    //search
    tasks = tasks.filter(
      task => task.name.toLowerCase().indexOf(this.props.keyword) !== -1
    );

    //sort
    const { sort } = this.props;
    if (sort.by === "name") {
      tasks.sort((a, b) => {
        if (a.name > b.name) return sort.value;
        else if (a.name < b.name) return -sort.value;
        else return 0;
      });
    }
    if (sort.by === "level") {
      tasks.sort((a, b) => {
        if (a.level > b.level) return sort.value;
        else if (a.level < b.level) return -sort.value;
        else return 0;
      });
    }
    if (sort.by === "status") {
      tasks.sort((a, b) => {
        if (a.isCompleted > b.isCompleted) return -sort.value;
        else if (a.isCompleted < b.isCompleted) return sort.value;
        else return 0;
      });
    }

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

const mapStateToProps = state => ({
  tasks: state.tasks,
  keyword: state.search,
  sort: state.sort
});

export default connect(
  mapStateToProps,
  null
)(TaskList);
