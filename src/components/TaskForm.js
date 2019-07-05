import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addTask, onCloseForm } from "../actions/index";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      level: 1
    };
  }
  onChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: name === "level" ? parseInt(value, 10) : value
    });
  };

  onHandleSubmit = event => {
    event.preventDefault();
    let { name } = this.state;
    name = name.trim();
    if (name === "") {
      alert("Thông tin rỗng....");
      this.props.onCloseForm();
      return;
    }
    this.props.addToTask(this.state);
    this.onCloseForm();
  };

  onCloseForm = () => {
    this.props.onCloseForm();
  };

  componentWillMount() {
    const { task } = this.props;
    if (task) {
      this.setState({
        id: task.id,
        name: task.name,
        level: task.level
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.task) {
      this.setState({
        id: nextProps.task.id,
        name: nextProps.task.name,
        level: nextProps.task.level
      });
    } else if (!nextProps.task) {
      this.setState({
        id: "",
        name: "",
        level: 1
      });
    }
  }

  render() {
    return (
      <Card>
        <Card.Header className="bg-primary text-white">
          {this.state.id !== "" ? "Cập nhật công việc" : "Thêm công việc"}
        </Card.Header>
        <Card.Body>
          <Form onSubmit={this.onHandleSubmit}>
            <Form.Group controlId="TaskInput">
              <Form.Label>
                <b>Tên:</b>
              </Form.Label>
              <Form.Control
                value={this.state.name}
                type="text"
                name="name"
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.Group controlId="LevelSelect">
              <Form.Label>
                <b>Mức độ: </b>
              </Form.Label>
              <Form.Control
                as="select"
                name="level"
                onChange={this.onChange}
                value={this.state.level}
              >
                <option value={0}>Thấp</option>
                <option value={1}>Trung bình</option>
                <option value={2}>Cao</option>
              </Form.Control>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button className="mr-3" variant="success" type="submit">
                Lưu Lại
              </Button>
              <Button onClick={this.onCloseForm} variant="danger" type="reset">
                Hủy bỏ
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  addToTask: task => dispatch(addTask(task)),
  onCloseForm: () => dispatch(onCloseForm())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);
