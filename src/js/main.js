import '../scss/style.scss'
import "modern-normalize/modern-normalize.css";

import { stickyHeader } from "./modules/stickyHeader.js";

stickyHeader();








// document.addEventListener("DOMContentLoaded", () => {
//   const slider = document.querySelector(".slider-item");
//   const prevBtn = document.querySelector(".prev");
//   const nextBtn = document.querySelector(".next");

//   const slideWidth = 242; // Ширина одного слайда
//   let isMoving = false;

//   const moveSlide = (direction) => {
//     if (isMoving) return;
//     isMoving = true;

//     // Определяем направление движения
//     const offset = direction === "next" ? -slideWidth : slideWidth;

//     // Сдвигаем с анимацией
//     slider.style.transition = "transform 0.5s ease";
//     slider.style.transform = `translateX(${offset}px)`;

//     setTimeout(() => {
//       slider.style.transition = "none";

//       if (direction === "next") {
//         // Движение вправо: перенос первого слайда в конец
//         const firstSlide = slider.firstElementChild;
//         slider.appendChild(firstSlide);
//       } else {
//         // Движение влево: перенос последнего слайда в начало
//         const lastSlide = slider.lastElementChild;
//         slider.prepend(lastSlide);
//       }

//       // Сброс позиции
//       slider.style.transform = `translateX(0)`;
//       isMoving = false;
//     }, 500);
//   };

//   nextBtn.addEventListener("click", () => moveSlide("next"));
//   prevBtn.addEventListener("click", () => moveSlide("prev"));
// });


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

    setTimeout(() => {
      // После завершения анимации переносим слайд
      if (direction === "next") {
        // Перемещаем первый слайд в конец
        const firstSlide = slider.firstElementChild;
        slider.appendChild(firstSlide);
      } else {
        // Перемещаем последний слайд в начало
        const lastSlide = slider.lastElementChild;
        slider.prepend(lastSlide);
      }

      // Сбрасываем трансформацию и отключаем анимацию
      slider.style.transition = "none";
      slider.style.transform = `translateX(0)`;

      // Завершаем движение
      isMoving = false;
    }, 300); // Длительность анимации
  };

  // Обработчики событий для кнопок
  nextBtn.addEventListener("click", () => moveSlide("next"));
  prevBtn.addEventListener("click", () => moveSlide("prev"));
});
