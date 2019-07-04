import * as types from "../constants/actionTypes";
import uniqid from "uniqid";

const data = JSON.parse(localStorage.getItem("tasks"));
var initialState = data ? data : [];

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_TASK:
      let { task } = action;
      let tasks = state;
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
      return [...tasks];

    default:
      return state;
  }
};

export default tasks;
