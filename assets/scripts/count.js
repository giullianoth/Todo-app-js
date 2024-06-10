import { allTasksQt, completedTasksQt, countArea, filter, notCompletedTasksQt } from "./variables.js";

/**
 * Shows the quantity of taskson the DOM.
 */
const countTask = () => {
    let quantity = 0;

    switch (filter) {
        case "all":
            quantity = allTasksQt();
            break;

        case "active":
            quantity = notCompletedTasksQt();
            break;

        case "completed":
            quantity = completedTasksQt();
            break;
    }

    countArea.innerText = quantity > 0 ? `${quantity} ${quantity > 1 ? "items" : "item"}` : "No items";
}

export default countTask;