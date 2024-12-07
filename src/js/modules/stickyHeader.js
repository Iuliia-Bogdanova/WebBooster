export function stickyHeader() {
  window.addEventListener("scroll", () => {
    const headerTop = document.querySelector(".header-top");

    if (window.scrollY > 0) {
      headerTop.classList.add("scrolled");
    } else {
      headerTop.classList.remove("scrolled");
    }
  });
}
