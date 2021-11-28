const mouseCursor = document.querySelector(".cursor");
<<<<<<< HEAD
const mouseCursorInnerCircle = document.querySelector(".inner-circle");

=======
>>>>>>> upstream/master
const hoverChange = document.querySelectorAll(".hover-change");
const mouseCursorText = document.querySelector(".cursor-text");
const RegBtn = document.querySelector(".Regbtn");

<<<<<<< HEAD
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
=======
// const mainContainer = document.querySelector(".main-container");
document.addEventListener("mousemove", (e) => {
    mouseCursor.setAttribute(
        "style",
        "top : " + (e.pageY - 20) + "px; left :" + (e.pageX - 20) + "px;"
>>>>>>> upstream/master
    );
});

hoverChange.forEach((item) => {
    item.addEventListener("mouseover", () => {
<<<<<<< HEAD
        mouseCursor.classList.add("cursor-change");
        mouseCursorInnerCircle.classList.add("inner-circle-change");
        mouseCursor.classList.remove("cursor");
        mouseCursorInnerCircle.classList.remove("inner-circle");
=======
        mouseCursor.classList.add("change-cursor");
        mouseCursorText.classList.add("change-text");
        mouseCursor.classList.remove("cursor");
        mouseCursorText.classList.remove("cursor-text");
>>>>>>> upstream/master
    });
});
hoverChange.forEach((item) => {
    item.addEventListener("mouseleave", () => {
<<<<<<< HEAD
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
=======
        mouseCursor.classList.remove("change-cursor");
        mouseCursorText.classList.remove("change-text");
        mouseCursor.classList.add("cursor");
        mouseCursorText.classList.add("cursor-text");
    });
});

socials;
>>>>>>> upstream/master
