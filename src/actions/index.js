import * as types from "../constants/actionTypes";

export const listAll = () => ({
  type: types.LIST_ALL
});

export const saveTask = task => ({
  type: types.SAVE_TASK,
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

export const onUpdate = task => ({
  type: types.UPDATE_TASK,
  task
});

export const onSearch = keyword => ({
  type: types.SEARCH,
  keyword
});

export const onSort = (sortBy, sortValue) => ({
  type: types.SORT,
  sortBy,
  sortValue
});
