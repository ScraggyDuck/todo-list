import * as types from "../constants/actionTypes";
import uniqid from "uniqid";

var findIndex = (taskItems, id) => {
  let result = -1;
  taskItems.forEach((task, index) => {
    if (task.id === id) result = index;
  });
  return result;
};

const data = JSON.parse(localStorage.getItem("tasks"));
var initialState = data ? data : [];

const tasks = (state = initialState, action) => {
  let index = -1;
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.SAVE_TASK:
      let { task } = action;
      let tasks = [...state];
      if (task.id === "") {
        task.id = uniqid();
        tasks.push(task);
      } else {
        index = findIndex(state, task.id);
        tasks[index] = task;
      }
      localStorage.setItem("tasks", JSON.stringify(tasks));
      return tasks;
    case types.UPDATE_STATUS_TASK:
      index = findIndex(state, action.id);
      let tasksUpdate = [...state];
      if (index !== -1) {
        tasksUpdate[index] = {
          ...tasksUpdate[index],
          isCompleted: !tasksUpdate[index].isCompleted
        };
        localStorage.setItem("tasks", JSON.stringify(tasksUpdate));
      }
      return tasksUpdate;
    case types.DELETE_TASK:
      index = findIndex(state, action.id);
      let tasksDelete = [...state];
      if (index !== -1) {
        tasksDelete.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasksDelete));
      }
      return tasksDelete;
    default:
      return state;
  }
};

export default tasks;
