import React, { Component } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";

import { connect } from "react-redux";
import { onToggleForm, onUpdate, onShowForm } from "./actions/index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filter: {
        name: "",
        level: -1,
        status: -1
      },
      keyword: "",
      sort: {
        by: "name",
        value: 1
      }
    };
  }

  onToggleForm = () => {
    this.props.onUpdate({
      id: "",
      name: "",
      level: 1,
      isCompleted: false
    });
    if (this.props.taskEditting) this.props.onShowForm();
    else this.props.onToggleForm();
  };

  // onFilter = (filterName, filterLevel, filterStatus) => {
  //   this.setState({
  //     filter: {
  //       name: filterName.toLowerCase(),
  //       level: parseInt(filterLevel, 10),
  //       status: parseInt(filterStatus, 10)
  //     }
  //   });
  // };

  // onSearch = keyword => {
  //   this.setState({
  //     keyword: keyword.toLowerCase()
  //   });
  // };

  // onSort = sort => {
  //   this.setState({
  //     sort: {
  //       by: sort.sortBy,
  //       value: sort.sortValue
  //     }
  //   });
  // };

  render() {
    let { isDisplayForm } = this.props;
    // if (filter) {
    //   if (filter.name) {
    //     tasks = tasks.filter(task => {
    //       return task.name.toLowerCase().indexOf(filter.name) !== -1;
    //     });
    //   }
    //   if (filter.level !== -1) {
    //     tasks = tasks.filter(task => {
    //       return task.level === filter.level;
    //     });
    //   }
    //   if (filter.status !== -1) {
    //     tasks = tasks.filter(task => {
    //       return task.isCompleted === (filter.status === 1 ? true : false);
    //     });
    //   }
    // }
    // if (keyword) {
    //   tasks = tasks.filter(task => {
    //     return task.name.toLowerCase().indexOf(keyword) !== -1;
    //   });
    // }
    // if (sort.by === "name") {
    //   tasks.sort((a, b) => {
    //     if (a.name > b.name) return sort.value;
    //     else if (a.name < b.name) return -sort.value;
    //     else return 0;
    //   });
    // }
    // if (sort.by === "level") {
    //   tasks.sort((a, b) => {
    //     if (a.level > b.level) return sort.value;
    //     else if (a.level < b.level) return -sort.value;
    //     else return 0;
    //   });
    // }
    // if (sort.by === "status") {
    //   tasks.sort((a, b) => {
    //     if (a.isCompleted > b.isCompleted) return -sort.value;
    //     else if (a.isCompleted < b.isCompleted) return sort.value;
    //     else return 0;
    //   });
    // }
    return (
      <div className="App">
        <Container className="mt-3">
          <h1 className="text-center mb-3">Quản lí công việc</h1>
          <Row>
            {isDisplayForm ? (
              <Col md={4}>
                {" "}
                <TaskForm />{" "}
              </Col>
            ) : (
              ""
            )}
            <Col md={isDisplayForm ? 8 : 12}>
              <div className="MainTask p-4 mb-4">
                <Button
                  onClick={this.onToggleForm}
                  variant="primary"
                  className="d-flex mb-3"
                >
                  Thêm công việc
                </Button>
                <TaskControl />
                <TaskList />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isDisplayForm: state.isDisplayForm,
  taskEditting: state.taskEditting
});

const mapDispatchToProps = (dispatch, props) => ({
  onToggleForm: () => dispatch(onToggleForm()),
  onUpdate: task => dispatch(onUpdate(task)),
  onShowForm: () => dispatch(onShowForm())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
