const scrollConatiner = document.querySelector(".main-container");

scrollConatiner.addEventListener("wheel", (e) => {
    // console.log(e);
    e.preventDefault();
    scrollConatiner.scrollLeft += e.deltaY;
<<<<<<< HEAD
});
=======
});
>>>>>>> 65194e9ee652ec7db3ee5d4fb26b0403b0ca1439
