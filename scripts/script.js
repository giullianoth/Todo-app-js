import createTask from "./create.js";
import { deleteTask, clearCompleted } from "./delete.js";
import filterTask from "./filter.js";
import changeTheme from "./theme.js";

changeTheme();
deleteTask();
clearCompleted();
createTask();