import { countArea } from "./variables.js";

const countTask = (quantity) => {    
    countArea.innerText = quantity > 0
        ? `${quantity} ${quantity > 1 ? "items" : "item"}`
        : "No items";
}

export default countTask;