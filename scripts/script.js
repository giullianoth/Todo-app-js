import createTask from "./create.js";
import { clearCompleted } from "./delete.js";
import filterTask from "./filter.js";
import loadList from "./load-list.js";
import changeTheme from "./theme.js";

const clear = document.querySelector(".j_clear_completed");

window.addEventListener("load", () => { loadList(null) });
changeTheme();
createTask();
filterTask();

clear.addEventListener("click", clearCompleted);