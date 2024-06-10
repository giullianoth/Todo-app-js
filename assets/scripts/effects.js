import { setStyle, transitionDuration, transitionGap } from "./variables.js";

/**
 * Preoperties of CSS transition attribute.
 * @param {string} property 
 * @param {string} duration 
 * @param {string} timingFunction 
 * @param {string} delay 
 * @returns {string}
 */
const transitionProps = (property = "all", duration = `${transitionDuration / 1000}s`, timingFunction = "ease", delay = "0s") =>
    `${property} ${duration} ${timingFunction} ${delay}`;

/**
 * Makes an element appear with slide down effect.
 * @param {HTMLElement} element 
 * @param {string} displayElement 
 */
const slideDown = (element, displayElement = "block") => {

    setStyle(element, "transition", "unset");
    setStyle(element, "display", displayElement);

    let maxHeight = element.offsetHeight;

    setStyle(element, "overflow", "hidden");
    setStyle(element, "maxHeight", 0);
    setStyle(element, "paddingTop", 0);
    setStyle(element, "paddingBottom", 0);
    setStyle(element, "borderTopWidth", 0);
    setStyle(element, "borderBottomWidth", 0);

    setTimeout(() => {
        setStyle(element, "transition", transitionProps());
        setStyle(element, "maxHeight", `${maxHeight}px`);
        setStyle(element, "paddingTop", "");
        setStyle(element, "paddingBottom", "");
        setStyle(element, "borderTopWidth", "");
        setStyle(element, "borderBottomWidth", "");

        setTimeout(() => {
            setStyle(element, "overflow", "");
            setStyle(element, "transition", "");
        }, transitionDuration);
    }, transitionGap);
}

/**
 * Makes an element disappear with slide up effect.
 * @param {HTMLElement} element 
 * @param {boolean} removeElement 
 */
const slideUp = (element, removeElement = false) => {
    
    setStyle(element, "transition", transitionProps());
    setStyle(element, "overflow", "hidden");
    setStyle(element, "maxHeight", 0);
    setStyle(element, "paddingTop", 0);
    setStyle(element, "paddingBottom", 0);
    setStyle(element, "borderTopWidth", 0);
    setStyle(element, "borderBottomWidth", 0);

    setTimeout(() => {
        setStyle(element, "display", "none");
        setStyle(element, "maxHeight", "");
        setStyle(element, "paddingTop", "");
        setStyle(element, "paddingBottom", "");
        setStyle(element, "borderTopWidth", "");
        setStyle(element, "borderBottomWidth", "");
        setStyle(element, "overflow", "");
        setStyle(element, "transition", "");
        removeElement && element.remove();
    }, transitionDuration);
}

export { slideDown, slideUp };