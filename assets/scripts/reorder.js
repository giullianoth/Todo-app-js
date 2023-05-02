import { draggableItems, dropZone } from "./variables.js";

const DragStart = (event) => {
    
}

const Drag = (event) => {
    
}

const DragEnd = (event) => {
    
}

const DragEnter = (event) => {
    
}

const DragOver = (event) => {
    
}

const DragLeave = (event) => {
    
}

const Drop = (event) => {
    
}

const ReorderTasks = () => {

    draggableItems().forEach((item) => {
        item.addEventListener("dragstart", DragStart);
        item.addEventListener("drag", Drag);
        item.addEventListener("dragend", DragEnd);
    })

    dropZone.addEventListener("dragenter", DragEnter);
    dropZone.addEventListener("dragover", DragOver);
    dropZone.addEventListener("dragleave", DragLeave);
    dropZone.addEventListener("drop", Drop);
}

export default ReorderTasks;