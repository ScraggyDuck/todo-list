import * as types from "../constants/actionTypes";

var initialState = {
  by: "name",
  value: 1
};

const sort = (state = initialState, action) => {
  switch (action.type) {
    case types.SORT:
      const sort = {
        by: action.sortBy,
        value: action.sortValue
      };
      return sort;
    default:
      return state;
  }
};

export default sort;
