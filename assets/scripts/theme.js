import { addClass, elementContainsClass, getElement, removeClass, setStyle, toggleClass } from "./variables.js";

const btnThemeAttribute = (btn) => btn.setAttribute("title", (elementContainsClass(document.body, "light_theme") ? "Change to dark theme" : "Change to light theme"));

const changeTheme = () => {
    const btnTheme = getElement(".j_theme");
    const btnThemeIcon = getElement("i", btnTheme);

    btnThemeAttribute(btnTheme);

    btnTheme.addEventListener("click", () => {
        toggleClass(document.body, "light_theme")

        setStyle(btnThemeIcon, "transform", "translateY(-150%)");
        setStyle(btnThemeIcon, "opacity", 0);

        setTimeout(() => {
            if (document.body.classList.contains("light_theme")) {
                removeClass(btnThemeIcon, "fa-sun");
                addClass(btnThemeIcon, "fa-moon");
            } else {
                removeClass(btnThemeIcon, "fa-moon");
                addClass(btnThemeIcon, "fa-sun");
            }

            setStyle(btnThemeIcon, "transform", "");
            setStyle(btnThemeIcon, "opacity", "");
        }, 300);

        btnThemeAttribute(btnTheme);
    })
}

export default changeTheme;