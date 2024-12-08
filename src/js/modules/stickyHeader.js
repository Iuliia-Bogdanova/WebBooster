export function stickyHeader() {
  window.addEventListener("scroll", () => {
    const headerTop = document.querySelector(".header-top");
    const headerAbout = document.querySelector(".header-about");

    if (window.scrollY > 0) {
      headerTop.classList.add("scrolled");
      headerAbout.classList.add("scrolled");
    } else {
      headerTop.classList.remove("scrolled");
      headerAbout.classList.remove("scrolled");
    }
  });
}
