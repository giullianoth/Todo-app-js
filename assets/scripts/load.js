import CompleteTask from "./complete.js";
import { taskElement } from "./create.js";
import { DeleteCompleted, DeleteTask } from "./delete.js";
import UpdateTask from "./update.js";
import { clearCompleted, completeBtn, deleteBtn, emptyMessage, getStoragedTasks, storagedTasks, taskList, tasks, tasksToUpdate } from "./variables.js";

const LoadTasks = () => {
    
    if (storagedTasks.getItem("tasks")) {      

        if (emptyMessage()) {
            emptyMessage().remove();
        }
        
        getStoragedTasks().forEach((item) => {
            tasks.push({
                task: item.task,
                completed: item.completed,
                element: taskElement(item.task, item.completed),
                outerHTML: item.outerHTML
            });
        })

        tasks.forEach((task) => taskList().append(task.element));

        completeBtn().forEach((btn) => btn.addEventListener("click", CompleteTask));
        deleteBtn().forEach((btn) => btn.addEventListener("click", DeleteTask));
        clearCompleted.addEventListener("click", DeleteCompleted);

        tasksToUpdate().forEach((task) => task.addEventListener("dblclick", UpdateTask));
    }
}

export default LoadTasks;