import { createTask } from "./create.js";
import filterTask from "./filter.js";
import LoadTasks from "./load.js";
import changeTheme from "./theme.js";

window.addEventListener("load", LoadTasks);

changeTheme();
createTask();
filterTask();