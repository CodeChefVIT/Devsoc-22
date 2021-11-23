const mouseCursor = document.querySelector(".cursor");
const hoverChange = document.querySelectorAll(".hover-change");
const mouseCursorText = document.querySelector(".cursor-text");
const RegBtn = document.querySelector(".Regbtn");

// const mainContainer = document.querySelector(".main-container");
document.addEventListener("mousemove", (e) => {
    mouseCursor.setAttribute(
        "style",
        "top : " + (e.pageY - 20) + "px; left :" + (e.pageX - 20) + "px;"
    );
});

hoverChange.forEach((item) => {
    item.addEventListener("mouseover", () => {
        mouseCursor.classList.add("change-cursor");
        mouseCursorText.classList.add("change-text");
        mouseCursor.classList.remove("cursor");
        mouseCursorText.classList.remove("cursor-text");
    });
});
hoverChange.forEach((item) => {
    item.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("change-cursor");
        mouseCursorText.classList.remove("change-text");
        mouseCursor.classList.add("cursor");
        mouseCursorText.classList.add("cursor-text");
    });
});

socials;