const scrollConatiner = document.querySelector(".main-container");
// const ImageContainer = document.querySelector(".faq-image-container");
// const ImageRowContainer = document.querySelector(".faq-image-row-container");
// const RowText = document.querySelector(".faq-desc-text");

scrollConatiner.addEventListener("wheel", (e) => {
    e.preventDefault();
    let screenWidth = window.screen.width;
    if (screenWidth > 1000) {
        scrollConatiner.scrollLeft += e.deltaY;
    }
});

// On scroll animations
// const targets = document.querySelectorAll(".anim1");

// options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 1,
// };

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
