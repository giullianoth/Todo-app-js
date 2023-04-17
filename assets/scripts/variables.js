// DOM
const getElement = (selector, parentElement = null) => (parentElement ?? document).querySelector(selector);
const getElements = (selector, parentElement = null) => (parentElement ?? document).querySelectorAll(selector);

const normalArrayOfElements = (arr) => {
    let list = [];
    arr.forEach((item) => list.push(item));
    return list;
}

const setStyle = (element, attr, value) => element.style[attr] = value;

const addClass = (element, className) => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);
const toggleClass = (element, className) => element.classList.toggle(className);
const elementContainsClass = (element, className) => element.classList.contains(className);

// TASKS
const emptyMessage = () => getElement(".j_empty");
const taskList = () => getElement(".j_list");

const formCreate = getElement(".j_create");
const completeCheckElement = getElement("#new_complete", formCreate);
const taskInputElement = getElement("#new_task", formCreate);

const allTasks = () => normalArrayOfElements(getElements(".j_task"));
const notCompletedTasks = () => allTasks().filter((task) => !elementContainsClass(task, "completed"));
const completedTasks = () => allTasks().filter((task) => elementContainsClass(task, "completed"));

const completeBtn = () =>  normalArrayOfElements(getElements(".j_complete"));

export {
    getElement, getElements, normalArrayOfElements,
    setStyle, addClass, removeClass, toggleClass, elementContainsClass,

    emptyMessage, taskList,
    formCreate, completeCheckElement, taskInputElement,
    allTasks, notCompletedTasks, completedTasks,
    completeBtn,
}