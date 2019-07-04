import React, { Component } from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import myReducer from "./reducers/index";

import { Container, Row, Col, Button } from "react-bootstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";

const store = createStore(myReducer);

class App extends Component {
  constructor() {
    super();
    this.state = {
      isDisplayForm: false,
      taskEditting: null,
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
    if (this.state.taskEditting) {
      this.setState({
        isDisplayForm: true,
        taskEditting: null
      });
    } else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditting: null
      });
    }
  };

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false,
      taskEditting: null
    });
  };

  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    });
  };

  // onSubmit = task => {
  //   const { tasks } = this.state;
  //   if (task.id === "") {
  //     task.id = uniqid();
  //     task.isCompleted = false;
  //     tasks.push(task);
  //   } else {
  //     const index = this.findIndex(task.id);
  //     task.isCompleted = tasks[index].isCompleted;
  //     tasks[index] = task;
  //     console.log(task);
  //   }
  //   this.setState({
  //     tasks: tasks,
  //     taskEditting: null
  //   });
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  //   this.onCloseForm();
  // };

  // onUpdateStatus = id => {
  //   let { tasks } = this.state;
  //   const index = this.findIndex(id);
  //   if (index !== -1) {
  //     tasks[index].isCompleted = !tasks[index].isCompleted;
  //     this.setState({
  //       tasks: tasks
  //     });
  //     localStorage.setItem("tasks", JSON.stringify(tasks));
  //   }
  // };

  // onDelete = id => {
  //   let { tasks } = this.state;
  //   const index = this.findIndex(id);
  //   if (index !== -1) {
  //     tasks.splice(index, 1);
  //     this.setState({
  //       tasks: tasks
  //     });
  //     localStorage.setItem("tasks", JSON.stringify(tasks));
  //   }
  //   this.onCloseForm();
  // };

  // onUpdate = id => {
  //   const { tasks } = this.state;
  //   const index = this.findIndex(id);
  //   if (index !== -1) {
  //     this.setState({
  //       taskEditting: tasks[index]
  //     });
  //     this.onShowForm();
  //   }
  // };

  // findIndex = id => {
  //   const { tasks } = this.state;
  //   let result = -1;
  //   tasks.forEach((task, index) => {
  //     if (task.id === id) result = index;
  //   });
  //   return result;
  // };

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
    let {
      tasks,
      isDisplayForm,
      taskEditting,
      filter,
      keyword,
      sort
    } = this.state;
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
      <Provider store={store}>
        <div className="App">
          <Container className="mt-3">
            <h1 className="text-center mb-3">Quản lí công việc</h1>
            <Row>
              {isDisplayForm ? (
                <Col md={4}>
                  <TaskForm
                    onCloseForm={this.onCloseForm}
                    onSubmit={this.onSubmit}
                    task={taskEditting}
                  />
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
                  <TaskControl onSearch={this.onSearch} onSort={this.onSort} />
                  <TaskList
                    onUpdateStatus={this.onUpdateStatus}
                    onDelete={this.onDelete}
                    onUpdate={this.onUpdate}
                    onFilter={this.onFilter}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
