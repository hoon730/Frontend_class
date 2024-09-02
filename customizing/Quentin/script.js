
window.onload = function() {
  const lines = document.querySelectorAll(".line");
  const risingTexts = document.querySelectorAll(".rising-text");

  lines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add("active");
    },80 * (index + 1));
  });

  risingTexts.forEach((risingText, i) => {
    setTimeout(() => {
      risingText.classList.add("active");
    }, 250 * (i + 1));
  });
};

