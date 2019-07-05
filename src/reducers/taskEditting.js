import * as types from "../constants/actionTypes";

var initialState = null;

const taskEditting = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_TASK:
      return action.task;
    default:
      return state;
  }
};

export default taskEditting;
