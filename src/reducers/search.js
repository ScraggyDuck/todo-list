import * as types from "../constants/actionTypes";

var initialState = "";

const search = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH:
      return action.keyword.toLowerCase();
    default:
      return state;
  }
};

export default search;
