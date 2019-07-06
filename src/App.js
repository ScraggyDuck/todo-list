import React, { Component } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";

import { connect } from "react-redux";
import { onToggleForm, onUpdate, onShowForm } from "./actions/index";

class App extends Component {
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
  render() {
    let { isDisplayForm } = this.props;
    return (
      <div className="App">
        <Container className="mt-3">
          <h1 className="text-center mb-3">
            <i className="far fa-list-alt" />
            &nbsp;Quản lí công việc
          </h1>
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
                  <i className="far fa-plus-square" />
                  &nbsp;Thêm công việc
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
