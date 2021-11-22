const scrollConatiner = document.querySelector(".main-container");

scrollConatiner.addEventListener("wheel", (e) => {
    // console.log(e);
    e.preventDefault();
    scrollConatiner.scrollLeft += e.deltaY;
});