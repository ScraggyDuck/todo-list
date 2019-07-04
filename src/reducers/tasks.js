import * as types from "../constants/actionTypes";

const data = JSON.parse(localStorage.getItem("tasks"));
const initialState = data ? data : [];

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    default:
      return state;
  }
};

export default tasks;
