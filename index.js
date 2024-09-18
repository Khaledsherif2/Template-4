const menu = document.querySelector(".fa-bars");
const sideMenu = document.querySelector("aside");
const closeMenu = document.querySelector(".fa-xmark");
const minMenu = document.querySelectorAll(".min-menu");
const pages = document.querySelectorAll(
  ".links > ul:first-of-type > li:last-child"
);

menu.addEventListener("click", () => {
  sideMenu.style.display = "block";
});
closeMenu.addEventListener("click", () => {
  sideMenu.style.display = "none";
});
pages.forEach((page, i) => {
  page.addEventListener("click", () => {
    minMenu[i].style.display === "none"
      ? (minMenu[i].style.display = "block")
      : (minMenu[i].style.display = "none");
  });
});
