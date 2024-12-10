export function initSlider() {
  document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider-item");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    const slideWidth = 242;
    let isMoving = false;

    const moveSlide = (direction) => {
      if (isMoving) return;
      isMoving = true;

      // Определить направление
      const offset = direction === "next" ? -slideWidth : slideWidth;

      // Сдвинуть с анимацией
      slider.style.transition = "transform 0.3s ease";
      slider.style.transform = `translateX(${offset}px)`;

      // Обработчик завершения анимации
      slider.addEventListener(
        "transitionend",
        () => {
          slider.style.transition = "none";

          if (direction === "next") {
            // Переместить первый слайд в конец
            const firstSlide = slider.firstElementChild;
            slider.appendChild(firstSlide);
          } else {
            // Переместить последний слайд в начало
            const lastSlide = slider.lastElementChild;
            slider.prepend(lastSlide);
          }

          // Сбросить трансформацию
          slider.style.transform = `translateX(0)`;

          // Завершить движение
          isMoving = false;
        },
        { once: true }
      );
    };

    nextBtn.addEventListener("click", () => moveSlide("next"));
    prevBtn.addEventListener("click", () => moveSlide("prev"));
  });
}