export function initSlider() {
  document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider-item");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    const slideWidth = 242; // Ширина одного слайда
    let isMoving = false;

    // Функция для перемещения слайдов
    const moveSlide = (direction) => {
      if (isMoving) return;
      isMoving = true;

      // Определяем направление
      const offset = direction === "next" ? -slideWidth : slideWidth;

      // Сдвигаем с анимацией
      slider.style.transition = "transform 0.3s ease";
      slider.style.transform = `translateX(${offset}px)`;

      // Обработчик завершения анимации
      slider.addEventListener(
        "transitionend",
        () => {
          // Перемещаем слайды без анимации
          slider.style.transition = "none";

          if (direction === "next") {
            // Перемещаем первый слайд в конец
            const firstSlide = slider.firstElementChild;
            slider.appendChild(firstSlide);
          } else {
            // Перемещаем последний слайд в начало
            const lastSlide = slider.lastElementChild;
            slider.prepend(lastSlide);
          }

          // Сбрасываем трансформацию
          slider.style.transform = `translateX(0)`;

          // Завершаем движение
          isMoving = false;
        },
        { once: true }
      );
    };

    // Обработчики событий для кнопок
    nextBtn.addEventListener("click", () => moveSlide("next"));
    prevBtn.addEventListener("click", () => moveSlide("prev"));
  });
}