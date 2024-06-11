// DOM

/**
 * Gets an HTML element from DOM.
 * @param {string} selector 
 * @param {HTMLElement} parentElement 
 * @returns {HTMLElement}
 */
const getElement = (selector, parentElement = null) => (parentElement ?? document).querySelector(selector);

/**
 * Gets a list of elements from the DOM.
 * @param {string} selector 
 * @param {HTMLElement} parentElement 
 * @returns {NodeListOf<HTMLElement>}
 */
const getElements = (selector, parentElement = null) => (parentElement ?? document).querySelectorAll(selector);

/**
 * Turns a node list into a regular array.
 * @param {NodeListOf<HTMLElement>} arr 
 * @returns {Array}
 */
const normalArray = (arr) => {
    let list = [];
    arr.forEach((item) => list.push(item));
    return list;
}

/**
 * Sets an inline CSS style on an element.
 * @param {HTMLElement} element 
 * @param {string} attr 
 * @param {string} value 
 * @returns {void}
 */
const setStyle = (element, attr, value) => element.style[attr] = value;

/**
 * Adds a class name in an element.
 * @param {HTMLElement} element 
 * @param {string} className 
 * @returns {void}
 */
const addClass = (element, className) => element.classList.add(className);

/**
 * Removes a class name from an element.
 * @param {HTMLElement} element 
 * @param {string} className 
 * @returns {void}
 */
const removeClass = (element, className) => element.classList.remove(className);

/**
 * Toggle a specified class name in an element.
 * @param {HTMLElement} element 
 * @param {string} className 
 * @returns {void}
 */
const toggleClass = (element, className) => element.classList.toggle(className);

/**
 * Verifies if an element has a specified class name.
 * @param {HTMLElement} element 
 * @param {string} className 
 * @returns {boolean}
 */
const elementContainsClass = (element, className) => element.classList.contains(className);

/**
 * Gets a CSS computed style of an element.
 * @param {HTMLElement} element 
 * @param {string} attr 
 * @returns {string}
 */
const computedStyle = (element, attr) => window.getComputedStyle(element)[attr];

/**
 * Verifies if an element is visible on DOM.
 * @param {HTMLElement} element 
 * @returns {boolean}
 */
const isVisible = (element) => computedStyle(element, "display") !== "none";

/**
 * Transition duration in miliseconds.
 */
const transitionDuration = 300;

/**
 * Transition gap in miliseconds.
 */
const transitionGap = 10;

// TASKS
/**
 * List of created tasks.
 */
const tasks = [];

/**
 * Storaged list of tasks.
 */
const storagedTasks = localStorage;

/**
 * Storages the task from the list.
 * @returns {void}
 */
const addStoragedTask = () => storagedTasks.setItem("tasks", JSON.stringify(tasks));

/**
 * Clears all the storaged tasks.
 * @returns {void}
 */
const clearStoragedTasks = () => storagedTasks.clear();

/**
 * Gets the storaged tasks.
 * @returns {object[]}
 */
const getStoragedTasks = () => JSON.parse(storagedTasks.getItem("tasks"));

/**
 * Filter of tasks.
 */
var filter = "all";

/**
 * Defines the filter of tasks.
 * @param {string} filterBy 
 * @returns {void}
 */
const filterTasks = (filterBy) => filter = filterBy;

/**
 * Gets the empty list message element.
 * @returns {HTMLElement}
 */
const emptyMessage = () => getElement(".j_empty");

/**
 * Gets the list of tasks on DOM.
 * @returns {HTMLElement}
 */
const taskList = () => getElement(".j_list");

/**
 * The form for creating new tasks.
 */
const formCreate = getElement(".j_create");

/**
 * The checkbox of completed task on creating form.
 */
const completeCheckElement = getElement("#new_complete", formCreate);

/**
 * The input of the new task on creating form.
 */
const taskInputElement = getElement("#new_task", formCreate);

/**
 * Gets all tasks on DOM.
 * @returns {HTMLElement[]}
 */
const allTasks = () => normalArray(getElements(".j_task"));

/**
 * Gets the non complete tasks on DOM.
 * @returns {HTMLElement[]}
 */
const notCompletedTasks = () => allTasks().filter((task) => !elementContainsClass(task, "completed"));

/**
 * Gets the complete tasks on DOM.
 * @returns {HTMLElement[]}
 */
const completedTasks = () => allTasks().filter((task) => elementContainsClass(task, "completed"));

/**
 * Gets the quantity of all tasks on DOM.
 * @returns {number}
 */
const allTasksQt = () => allTasks().length;

/**
 * Gets the quantity of non complete tasks on DOM.
 * @returns {number}
 */
const notCompletedTasksQt = () => notCompletedTasks().length;

/**
 * Gets the quantity of complete tasks on DOM.
 * @returns {number}
 */
const completedTasksQt = () => completedTasks().length;

/**
 * Verifies if a task is completed.
 * @param {HTMLElement} task 
 * @returns {boolean}
 */
const isCompletedTask = (task) => elementContainsClass(task, "completed");

/**
 * The element of count of tasks.
 */
const countArea = getElement(".j_count");

/**
 * Gets a task by a target of an event.
 * @param {HTMLElement} target 
 * @returns {HTMLElement}
 */
const getTask = (target) => ((target.parentNode).parentNode).parentNode;

/**
 * Gets the list of complete checkbox from the tasks.
 * @returns {HTMLElement[]}
 */
const completeBtn = () =>  normalArray(getElements(".j_complete"));

/**
 * Gets the list of buttons to delete a task.
 * @returns {HTMLElement[]}
 */
const deleteBtn = () => normalArray(getElements(".j_delete"));

/**
 * The button to clear completed tasks.
 */
const clearCompleted = getElement(".j_clear_completed");

/**
 * Gets the editable tasks.
 * @returns {HTMLElement[]}
 */
const tasksToUpdate = () => getElements(".j_update");

/**
 * Gets the form to edit a task.
 * @returns {HTMLElement}
 */
const updateForm = () => getElement(".j_update_form");

/**
 * All filter buttons.
 */
const filterBtn = normalArray(getElements(".j_filter"));

/**
 * The button of all tasks.
 */
const allTasksBtn = filterBtn.find((btn) => elementContainsClass(btn, "j_filter_all"));

/**
 * The button of active tasks.
 */
const activeTasksBtn = filterBtn.find((btn) => elementContainsClass(btn, "j_filter_active"));

/**
 * The button of completed tasks.
 */
const completedTasksBtn = filterBtn.find((btn) => elementContainsClass(btn, "j_filter_completed"));

//DRAG AND DROP ITEMS
/**
 * The zone of draggable tasks.
 */
const dropZone = getElement(".j_drop_zone");

/**
 * Gets all draggable tasks.
 * @returns {HTMLElement[]}
 */
const draggableItems = () => normalArray(getElements(".j_draggable", dropZone));

export {
    getElement, getElements, normalArray,
    setStyle, addClass, removeClass, toggleClass, elementContainsClass, computedStyle, isVisible,
    transitionDuration, transitionGap,

    tasks, storagedTasks, addStoragedTask, clearStoragedTasks, getStoragedTasks, filter, filterTasks,
    emptyMessage, taskList,
    formCreate, completeCheckElement, taskInputElement,
    allTasks, notCompletedTasks, completedTasks,
    allTasksQt, notCompletedTasksQt, completedTasksQt, isCompletedTask, countArea, getTask,
    completeBtn, deleteBtn, clearCompleted,
    tasksToUpdate, updateForm,
    filterBtn, allTasksBtn, activeTasksBtn, completedTasksBtn,

    dropZone, draggableItems,
}