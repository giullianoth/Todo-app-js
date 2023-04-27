import countTask from "./count.js";
import { slideDown, slideUp } from "./effects.js";
import { activeTasksBtn, addClass, allTasks, allTasksBtn, allTasksQt, completedTasks, completedTasksBtn, completedTasksQt, elementContainsClass, filter, filterBtn, filterTasks, isVisible, notCompletedTasks, notCompletedTasksQt, removeClass, tasks } from "./variables.js";

const filterTask = () => {

    filterBtn.forEach((btn, i, arr) => {

        btn.addEventListener("click", () => {
            arr.forEach((item) => removeClass(item, "active"));
            addClass(btn, "active");

            btn === allTasksBtn && filterTasks("all");
            btn === activeTasksBtn && filterTasks("active");
            btn === completedTasksBtn && filterTasks("completed");

            switch (filter) {
                case "all":
                    allTasks().forEach((task) => !isVisible(task) && slideDown(task));
                    countTask(allTasksQt());
                    break;

                case "active":
                    completedTasks().forEach((task) => slideUp(task));
                    tasks.forEach((task) => !isVisible(task) && !elementContainsClass(task, "completed") && slideDown(task));
                    countTask(notCompletedTasksQt());
                    break;

                case "completed":
                    notCompletedTasks().forEach((task) => slideUp(task));
                    tasks.forEach((task) => !isVisible(task) && elementContainsClass(task, "completed") && slideDown(task));
                    countTask(completedTasksQt());
                    break;
            }
        })
    })
}

export default filterTask;