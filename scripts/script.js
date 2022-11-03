import completeTask from "./complete.js";
import createTask from "./create.js";
import { deleteTask, clearCompleted } from "./delete.js";
import filterTask from "./filter.js";
import changeTheme from "./theme.js";

changeTheme();
completeTask();
deleteTask();
clearCompleted();
filterTask();
createTask();