import * as types from "../constants/actionTypes";

export const listAll = () => ({
  type: types.LIST_ALL
});

export const addTask = task => ({
  type: types.ADD_TASK,
  task
});

export const onToggleForm = () => ({
  type: types.TOGGLE_FORM
});

export const onCloseForm = () => ({
  type: types.CLOSE_FORM
});

export const onShowForm = () => ({
  type: types.OPEN_FORM
});

export const onUpdateStatus = id => ({
  type: types.UPDATE_STATUS_TASK,
  id
});

export const onDelete = id => ({
  type: types.DELETE_TASK,
  id
});
