const filterBtn = document.querySelectorAll(".j_filter");

const filterTask = () => {

    filterBtn.forEach((btn, i, arr) => {
        btn.addEventListener("click", () => {

            arr.forEach(item => { item.classList.remove("active") })
            btn.classList.add("active");

            let list = document.querySelector(".j_list");
            let tasks = list.querySelectorAll(".j_task");

            tasks.forEach((task) => {
                task.style.maxHeight = "0";
                task.style.paddingTop = "0";
                task.style.paddingBottom = "0";
                task.style.visibility = "hidden";

                if (task.classList.contains("completed") && btn.classList.contains("j_filter_completed")) {
                    task.style.maxHeight = "";
                    task.style.paddingTop = "";
                    task.style.paddingBottom = "";
                    task.style.visibility = "";
                } else if (!task.classList.contains("completed") && btn.classList.contains("j_filter_active")) {
                    task.style.maxHeight = "";
                    task.style.paddingTop = "";
                    task.style.paddingBottom = "";
                    task.style.visibility = "";
                } else if (btn.classList.contains("j_filter_all")) {
                    task.style.maxHeight = "";
                    task.style.paddingTop = "";
                    task.style.paddingBottom = "";
                    task.style.visibility = "";
                }
            });
        })
    })
}

export default filterTask;