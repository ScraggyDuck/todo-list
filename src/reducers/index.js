import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";
import taskEditting from "./taskEditting";
import search from "./search";
import sort from "./sort";

const myReducer = combineReducers({
  tasks,
  isDisplayForm,
  taskEditting,
  search,
  sort
});

export default myReducer;
