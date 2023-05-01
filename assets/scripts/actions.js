import CompleteTask from "./complete.js";
import { DeleteCompleted, DeleteTask } from "./delete.js";
import UpdateTask from "./update.js";
import { clearCompleted, completeBtn, deleteBtn, tasksToUpdate } from "./variables.js";

const Actions = () => {
    completeBtn().forEach((btn) => btn.addEventListener("click", CompleteTask));
    deleteBtn().forEach((btn) => btn.addEventListener("click", DeleteTask));
    clearCompleted.addEventListener("click", DeleteCompleted);
    tasksToUpdate().forEach((task) => task.addEventListener("dblclick", UpdateTask));
}

export default Actions;