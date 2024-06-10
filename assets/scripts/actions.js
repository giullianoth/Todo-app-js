import CompleteTask from "./complete.js";
import { DeleteCompleted, DeleteTask } from "./delete.js";
import UpdateTask from "./update.js";
import { clearCompleted, completeBtn, deleteBtn, tasksToUpdate, updateForm } from "./variables.js";

/**
 * Implements all create, update and delete actions.
 */
const Actions = () => {
    completeBtn().forEach((btn) => btn.addEventListener("click", CompleteTask));
    deleteBtn().forEach((btn) => btn.addEventListener("click", DeleteTask));
    clearCompleted.addEventListener("click", DeleteCompleted);
    tasksToUpdate().forEach((task) => task.addEventListener("dblclick", (event) => !updateForm() && UpdateTask(event)));
}

export default Actions;