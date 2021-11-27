const scrollConatiner = document.querySelector(".main-container");

scrollConatiner.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollConatiner.scrollLeft += e.deltaY;
});

// On scroll animations
const targets = document.querySelectorAll(".anim1");

options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
};

// observer = new IntersectionObserver((entries) => {
//     // console.log(entries);
//     // console.log(entries[0].target);
//     entries.forEach((entry) => {
//         if (entry.intersectionRatio > 0) {
//             entry.target.style.animation = `anim 2s ${entry.target.dataset.delay}  forwards ease-out`;
//         } else {
//             entry.target.style.animation = "none";
//         }
//     });
// }, options);

// targets.forEach((target) => {
//     observer.observe(target);
// });
