const mouseCursor = document.querySelector(".cursor");
const mouseCursorInnerCircle = document.querySelector(".inner-circle");
const hoverChange = document.querySelectorAll(".hover-change");
const RegBtn = document.querySelector(".Regbtn");

document.addEventListener("mousemove", (e) => {
    mouseCursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
    );
});
document.addEventListener("mousemove", (e) => {
    mouseCursorInnerCircle.setAttribute(
        "style",
        "top: " + e.pageY + "px; left: " + e.pageX + "px;"
    );
});

hoverChange.forEach((item) => {
    item.addEventListener("mouseover", () => {
        mouseCursor.classList.add("cursor-change");
        mouseCursorInnerCircle.classList.add("inner-circle-change");
        mouseCursor.classList.remove("cursor");
        mouseCursorInnerCircle.classList.remove("inner-circle");
    });
});
hoverChange.forEach((item) => {
    item.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("cursor-change");
        mouseCursorInnerCircle.classList.remove("inner-circle-change");
        mouseCursor.classList.add("cursor");
        mouseCursorInnerCircle.classList.add("inner-circle");
    });
});

// For animatin screens to another section
// options = { rootMargin: "0px", threshold: "0" };

// const home = document.querySelector("#About");

// observer = new IntersectionObserver((entries) => {
//     console.log(entries);
//     window.scrollto(1000, 0);
// }, options);

// observer.observe(home);
