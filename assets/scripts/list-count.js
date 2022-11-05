import todoList from "./todo-list.js";

const listCount = () => {
    let todoCount = todoList.length;
    let todoCountArea = document.querySelector(".j_count");
    
    if (todoCount > 0) {
        todoCountArea.innerHTML = `${todoCount} ${todoCount === 1 ? "item" : "items"} left`;
    } else {
        todoCountArea.innerText = "No items";
    }
}

export default listCount;