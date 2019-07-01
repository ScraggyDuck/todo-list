import React, { Component } from "react";

import Search from "./Search";
import Sort from "./Sort";

export default class Control extends Component {
  render() {
    const { onSearch, onSort } = this.props;
    return (
      <div className="d-flex">
        <Search onSearch={onSearch} />
        <Sort onSort={onSort} />
      </div>
    );
  }
}
