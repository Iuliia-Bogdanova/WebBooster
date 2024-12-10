export function initSmoothOpening() {
  document.querySelectorAll(".faq__card").forEach((card) => {
    const textWrap = card.querySelector(".faq__text-wrap");

    // Инициализировать высоту
    if (card.open) {
      textWrap.style.maxHeight = `${textWrap.scrollHeight}px`;
    }

    card.addEventListener("toggle", () => {
      if (card.open) {
        textWrap.style.maxHeight = `${textWrap.scrollHeight}px`;
      } else {
        textWrap.style.maxHeight = `${textWrap.scrollHeight}px`;

        // Задержка для запуска анимации
        requestAnimationFrame(() => {
          textWrap.style.maxHeight = "0";
        });
      }
    });
  });
}