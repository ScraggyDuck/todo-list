import * as types from "../constants/actionTypes";

export const listAll = () => ({
  type: types.LIST_ALL
});

export const addTask = task => ({
  type: types.ADD_TASK,
  task
});
