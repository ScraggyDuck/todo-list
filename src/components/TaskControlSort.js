import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";

export default class TaskControlSort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "name",
      sortValue: 1
    };
  }
  onClick = (sortBy, sortValue) => {
    const sort = { sortBy, sortValue };
    this.props.onSort(sort);
    this.setState({ ...sort });
  };

  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Sắp xếp
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => this.onClick("name", 1)}>
            Từ A-Z
          </Dropdown.Item>
          <Dropdown.Item onClick={() => this.onClick("name", -1)}>
            Từ Z-A
          </Dropdown.Item>
          <hr />
          <Dropdown.Item onClick={() => this.onClick("level", 1)}>
            Mức độ tăng dần
          </Dropdown.Item>
          <Dropdown.Item onClick={() => this.onClick("level", -1)}>
            Mức độ giảm dần
          </Dropdown.Item>
          <hr />
          <Dropdown.Item onClick={() => this.onClick("status", 1)}>
            Trạng thái: Hoàn thành
          </Dropdown.Item>
          <Dropdown.Item onClick={() => this.onClick("status", -1)}>
            Trạng thái: Chưa hoàn thành
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
