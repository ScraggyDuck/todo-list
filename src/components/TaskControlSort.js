import React, { Component } from "react";

import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { onSort } from "../actions/index";

class TaskControlSort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "name",
      sortValue: 1
    };
  }

  onClick = (sortBy, sortValue) => {
    const sort = { sortBy, sortValue };
    this.props.onSort(sortBy, sortValue);
    this.setState({ ...sort });
  };

  render() {
    const { sortBy, sortValue } = this.state;
    return (
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Sắp xếp&nbsp;
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => this.onClick("name", 1)}>
            Từ A-Z &nbsp;
            {sortBy === "name" && sortValue === 1 ? (
              <i className="fas fa-check" />
            ) : (
              ""
            )}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => this.onClick("name", -1)}>
            Từ Z-A &nbsp;
            {sortBy === "name" && sortValue === -1 ? (
              <i className="fas fa-check" />
            ) : (
              ""
            )}
          </Dropdown.Item>
          <hr />
          <Dropdown.Item onClick={() => this.onClick("level", 1)}>
            Mức độ tăng dần &nbsp;
            {sortBy === "level" && sortValue === 1 ? (
              <i className="fas fa-check" />
            ) : (
              ""
            )}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => this.onClick("level", -1)}>
            Mức độ giảm dần &nbsp;
            {sortBy === "level" && sortValue === -1 ? (
              <i className="fas fa-check" />
            ) : (
              ""
            )}
          </Dropdown.Item>
          <hr />
          <Dropdown.Item onClick={() => this.onClick("status", 1)}>
            Trạng thái: Hoàn thành &nbsp;
            {sortBy === "status" && sortValue === 1 ? (
              <i className="fas fa-check" />
            ) : (
              ""
            )}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => this.onClick("status", -1)}>
            Trạng thái: Chưa hoàn thành &nbsp;
            {sortBy === "status" && sortValue === -1 ? (
              <i className="fas fa-check" />
            ) : (
              ""
            )}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSort: (sortBy, sortValue) => dispatch(onSort(sortBy, sortValue))
});

export default connect(
  null,
  mapDispatchToProps
)(TaskControlSort);
