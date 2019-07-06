import React, { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

import { connect } from "react-redux";
import { onSearch } from "../actions/index";

class TaskControlSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  onChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };

  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  };

  render() {
    return (
      <div className="mr-5" md={8}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Nhập từ khóa..."
            aria-describedby="basic-addon2"
            name="keyword"
            value={this.state.keyword}
            onChange={this.onChange}
          />
          <InputGroup.Append>
            <Button onClick={this.onSearch} variant="primary">
              Tìm kiếm&nbsp;
              <i className="fas fa-search" />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSearch: keyword => dispatch(onSearch(keyword))
});

export default connect(
  null,
  mapDispatchToProps
)(TaskControlSearch);
