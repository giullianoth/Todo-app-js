import { setStyle } from "./variables.js";

const transitionDurationDefault = 300;
const transitionGap = 10;

const transitionProps = (property = "all", duration = `${transitionDurationDefault / 1000}s`, timingFunction = "ease", delay = "0s") =>
    `${property} ${duration} ${timingFunction} ${delay}`;

const slideDown = (element, displayElement = "block") => {

    setStyle(element, "transition", "");
    setStyle(element, "display", displayElement);

    let maxHeight = element.offsetHeight;

    setStyle(element, "overflow", "hidden");
    setStyle(element, "maxHeight", 0);
    setStyle(element, "paddingTop", 0);
    setStyle(element, "paddingBottom", 0);

    setTimeout(() => {
        setStyle(element, "transition", transitionProps());
        setStyle(element, "maxHeight", `${maxHeight}px`);
        setStyle(element, "paddingTop", "");
        setStyle(element, "paddingBottom", "");

        setTimeout(() => {
            setStyle(element, "overflow", "");
            setStyle(element, "transition", "");
        }, transitionDurationDefault);
    }, transitionGap);
}

const slideUp = (element, removeElement = false) => {

}

export { slideDown, slideUp };