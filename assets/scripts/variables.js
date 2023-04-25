// DOM
const getElement = (selector, parentElement = null) => (parentElement ?? document).querySelector(selector);
const getElements = (selector, parentElement = null) => (parentElement ?? document).querySelectorAll(selector);

const normalArray = (arr) => {
    let list = [];
    arr.forEach((item) => list.push(item));
    return list;
}

const setStyle = (element, attr, value) => element.style[attr] = value;

const addClass = (element, className) => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);
const toggleClass = (element, className) => element.classList.toggle(className);
const elementContainsClass = (element, className) => element.classList.contains(className);

const computedStyle = (element, attr) => window.getComputedStyle(element)[attr];

const transitionDuration = 300;
const transitionGap = 10;

// TASKS
const tasks = [];

var filter = "all";
const filterTasks = (filterBy) => filter = filterBy;

const emptyMessage = () => getElement(".j_empty");
const taskList = () => getElement(".j_list");

const formCreate = getElement(".j_create");
const completeCheckElement = getElement("#new_complete", formCreate);
const taskInputElement = getElement("#new_task", formCreate);

const allTasks = () => normalArray(getElements(".j_task"));
const notCompletedTasks = () => allTasks().filter((task) => !elementContainsClass(task, "completed"));
const completedTasks = () => allTasks().filter((task) => elementContainsClass(task, "completed"));

const allTasksQt = () => allTasks().length;
const notCompletedTasksQt = () => notCompletedTasks().length;
const completedTasksQt = () => completedTasks().length;

const countArea = getElement(".j_count");

const getTask = (target) => ((target.parentNode).parentNode).parentNode;

const completeBtn = () =>  normalArray(getElements(".j_complete"));
const deleteBtn = () => normalArray(getElements(".j_delete"));

const clearCompleted = getElement(".j_clear_completed");

const tasksToUpdate = () => getElements(".j_update");
const updateForm = () => getElement(".j_update_form");

const filterBtn = normalArray(getElements(".j_filter"));
const allTasksBtn = filterBtn.find((btn) => elementContainsClass(btn, "j_filter_all"));
const activeTasksBtn = filterBtn.find((btn) => elementContainsClass(btn, "j_filter_active"));
const completedTasksBtn = filterBtn.find((btn) => elementContainsClass(btn, "j_filter_completed"));

export {
    getElement, getElements, normalArray,
    setStyle, addClass, removeClass, toggleClass, elementContainsClass, computedStyle,
    transitionDuration, transitionGap,

    tasks, filter, filterTasks,
    emptyMessage, taskList,
    formCreate, completeCheckElement, taskInputElement,
    allTasks, notCompletedTasks, completedTasks,
    allTasksQt, notCompletedTasksQt, completedTasksQt, countArea, getTask,
    completeBtn, deleteBtn, clearCompleted,
    tasksToUpdate, updateForm,
    filterBtn, allTasksBtn, activeTasksBtn, completedTasksBtn,
}