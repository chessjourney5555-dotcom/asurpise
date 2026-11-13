// Gentle entrance animation for elements as they appear.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".note-card").forEach((card, index) => {
    card.style.animationDelay = `${index * 120}ms`;
  });
});