import Actions from "./actions.js";
import { taskElement } from "./create.js";
import ReorderTasks from "./reorder.js";
import { emptyMessage, getStoragedTasks, taskList, tasks, } from "./variables.js";

const LoadTasks = () => {
    
    if (getStoragedTasks()) {      

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

        Actions();
        ReorderTasks();
    }
}

export default LoadTasks;