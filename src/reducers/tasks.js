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
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_TASK:
      let { task } = action;
      let tasks = [...state];
      console.log(tasks, state);
      if (task.id === "") {
        task.id = uniqid();
        task.isCompleted = false;
        tasks.push(task);
      }

      // // } else {
      // //   const index = this.findIndex(task.id);
      // //   task.isCompleted = tasks[index].isCompleted;
      // //   tasks[index] = task;
      // // }
      localStorage.setItem("tasks", JSON.stringify(tasks));
      return tasks;
    case types.UPDATE_STATUS_TASK:
      let index = findIndex(state, action.id);
      let taskItems = [...state];
      if (index !== -1) {
        taskItems[index] = {
          ...taskItems[index],
          isCompleted: !taskItems[index].isCompleted
        };
        localStorage.setItem("tasks", JSON.stringify(taskItems));
      }
      return taskItems;
    default:
      return state;
  }
};

export default tasks;
