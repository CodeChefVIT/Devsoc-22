const sidebar = document.querySelector(".sidebar");
const menuIcon = document.querySelector(".vertical-menu-icon-container");
const menuIconBar1 = document.querySelector(".bar-1");
const menuIconBar2 = document.querySelector(".bar-2");
const menuIconBar3 = document.querySelector(".bar-3");
const sidebarMenu = document.querySelector(".sidebar-sections-container");
const sidebarMenuSpan = document.querySelectorAll(".sidebar-sections-span");
const sidebarMenuLi = document.querySelectorAll(".sidebar-sections-li");
const section = document.querySelectorAll(".section");

// For open/close of sidebar menu

menuIcon.addEventListener("click", (e) => {
    menuIconBar1.classList.toggle("bar-1-change");
    menuIconBar2.classList.toggle("bar-2-change");
    menuIconBar3.classList.toggle("bar-3-change");
    sidebar.classList.toggle("sidebar-change");
    setTimeout(() => {
        sidebarMenu.classList.toggle("sidebar-sections-container-change");
    }, 200);
});
section.forEach((item) => {
    item.addEventListener("click", (e) => {
        let screenWidth = (85 / 100) * window.screen.width;
        if (e.clientX > screenWidth) {
            menuIconBar1.classList.toggle("bar-1-change");
            menuIconBar2.classList.toggle("bar-2-change");
            menuIconBar3.classList.toggle("bar-3-change");
            sidebar.classList.toggle("sidebar-change");
            setTimeout(() => {
                sidebarMenu.classList.toggle(
                    "sidebar-sections-container-change"
                );
            }, 300);
        }
    });
});

// For hover effect on extended sidebar menu options

sidebarMenuSpan.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
        item.classList.toggle("sidebar-sections-span-change");
    });
    item.addEventListener("mouseleave", (e) => {
        item.classList.toggle("sidebar-sections-span-change");
    });
    item.addEventListener("click", (e) => {
        menuIconBar1.classList.toggle("bar-1-change");
        menuIconBar2.classList.toggle("bar-2-change");
        menuIconBar3.classList.toggle("bar-3-change");
        sidebar.classList.toggle("sidebar-change");
        setTimeout(() => {
            sidebarMenu.classList.toggle("sidebar-sections-container-change");
        }, 300);
    });
});
