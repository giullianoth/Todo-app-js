import createTask from "./create.js";
import { clearCompleted } from "./delete.js";
import loadList from "./load-list.js";
import changeTheme from "./theme.js";

const clear = document.querySelector(".j_clear_completed");

window.addEventListener("load", () => { loadList(null) });
changeTheme();
createTask();

clear.addEventListener("click", clearCompleted);