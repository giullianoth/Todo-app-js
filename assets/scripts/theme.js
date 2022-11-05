const btnTheme = document.querySelector(".j_theme");
const btnThemeIcon = btnTheme.querySelector("i");

const changeTheme = () => {
    btnTheme.setAttribute("title", (document.body.classList.contains("light_theme") ? "Change to dark theme" : "Change to light theme"));

    btnTheme.addEventListener("click", () => {
        document.body.classList.toggle("light_theme");

        btnThemeIcon.style.transform = "translateY(-150%)";
        btnThemeIcon.style.opacity = "0";

        setTimeout(() => {
            if (document.body.classList.contains("light_theme")) {
                btnThemeIcon.classList.remove("fa-sun");
                btnThemeIcon.classList.add("fa-moon");
            } else {
                btnThemeIcon.classList.remove("fa-moon");
                btnThemeIcon.classList.add("fa-sun");
            }
            
            btnThemeIcon.style.transform = "";
            btnThemeIcon.style.opacity = "";
        }, 300);

        btnTheme.setAttribute("title", (document.body.classList.contains("light_theme") ? "Change to dark theme" : "Change to light theme"));
    })
}

export default changeTheme;