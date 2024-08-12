
window.onload = function() {
  const lines = document.querySelectorAll(".line");
  const rolling = document.querySelector(".rolling ul");

  // rolling.classList.add("active");

  lines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add("active");
    },80*(index + 1));
  });

  rolling.querySelectorAll("li").forEach((li, i) => {
    setTimeout(() => {
      li.style.transform = `translateY(-${i * 100}%)`
    }, 1000*(i + 1));
  })
};

