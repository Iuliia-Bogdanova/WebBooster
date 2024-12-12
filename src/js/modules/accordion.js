export function initSmoothOpening() {
  document.querySelectorAll(".faq__card, .menu__btn").forEach((card) => {
    const content = card.querySelector(".faq__text-wrap, .menu__text-wrap");

    if (!content) return;

    // Инициализация высоты при загрузке страницы
    if (card.open) {
      content.style.maxHeight = `${content.scrollHeight}px`;
    } else {
      content.style.maxHeight = "0";
    }

    card.addEventListener("toggle", () => {
      if (card.open) {
        content.style.maxHeight = `${content.scrollHeight}px`;
      } else {
        content.style.maxHeight = `${content.scrollHeight}px`; // Установка текущей высоты
        requestAnimationFrame(() => {
          content.style.maxHeight = "0"; // Анимация закрытия
        });
      }
    });
  });
}
