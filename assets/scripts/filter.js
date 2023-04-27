import countTask from "./count.js";
import { emptyElement } from "./delete.js";
import { slideDown, slideUp } from "./effects.js";
import { activeTasksBtn, addClass, allTasks, allTasksBtn, allTasksQt, completedTasks, completedTasksBtn, completedTasksQt, emptyMessage, filter, filterBtn, filterTasks, isCompletedTask, isVisible, notCompletedTasks, notCompletedTasksQt, removeClass, taskList, tasks, transitionDuration, transitionGap } from "./variables.js";

const filterTask = () => {

    filterBtn.forEach((btn, i, arr) => {

        btn.addEventListener("click", () => {
            arr.forEach((item) => removeClass(item, "active"));
            addClass(btn, "active");

            if (emptyMessage() && allTasksQt() > 0) {
                slideUp(emptyMessage(), true);
            }

            btn === allTasksBtn && filterTasks("all");
            btn === activeTasksBtn && filterTasks("active");
            btn === completedTasksBtn && filterTasks("completed");

            switch (filter) {
                case "all":
                    allTasks().forEach((task) => !isVisible(task) && slideDown(task));
                    countTask();                    

                    setTimeout(() => {
                        if (!emptyMessage() && allTasksQt() === 0) {
                            let empty = emptyElement();
                            taskList().append(empty);
                            slideDown(empty);
                        }
                    }, transitionDuration + transitionGap);
                    break;

                case "active":
                    completedTasks().forEach((task) => slideUp(task));
                    tasks.forEach((task) => !isVisible(task) && !isCompletedTask(task) && slideDown(task));
                    countTask();

                    setTimeout(() => {
                        if (!emptyMessage() && notCompletedTasksQt() === 0) {
                            let empty = emptyElement();
                            taskList().append(empty);
                            slideDown(empty);
                        }
                    }, transitionDuration + transitionGap);
                    break;

                case "completed":
                    notCompletedTasks().forEach((task) => slideUp(task));
                    tasks.forEach((task) => !isVisible(task) && isCompletedTask(task) && slideDown(task));
                    countTask();

                    setTimeout(() => {
                        if (!emptyMessage() && completedTasksQt() === 0) {
                            let empty = emptyElement();
                            taskList().append(empty);
                            slideDown(empty);
                        }
                    }, transitionDuration + transitionGap);
                    break;
            }
        })
    })
}

export default filterTask;