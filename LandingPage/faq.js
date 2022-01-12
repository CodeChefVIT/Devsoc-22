const faqContentContainer = document.querySelectorAll(
    ".faq-image-row-container"
);
// const faqDescContainer = document.querySelectorAll(".faq-desc-container");

// console.log(faqDescContainer);
// const faqDesc = document.querySelectorAll(".faq-desc-container ");
// const faqDescText = document.querySelectorAll(".faq-desc-text-2");

faqContentContainer.forEach((item) => {
    item.addEventListener("click", (e) => {
        console.log(e.target.querySelector(".hover-change"));
        console.log(e.target.querySelector(".faq-text"));
        let faqDesc = e.target.querySelector(".hover-change");
        let faqDescText = e.target.querySelector(".faq-text");
        faqDesc.classList.toggle("faq-desc-container");
        faqDesc.classList.toggle("faq-desc-container-change");
        faqDescText.classList.toggle("faq-desc-text-change");
        faqDescText.classList.toggle("faq-desc-text-2");
    });
});

// faqDescContainer.forEach((item) => {
//     item.addEventListener("click", (e) => {
//         console.log(e);
//     });
// });
