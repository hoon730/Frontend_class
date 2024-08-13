
window.onload = function() {
  const lines = document.querySelectorAll(".line");
  const rollings = document.querySelectorAll(".rolling ul li");

  lines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add("active");
    },80*(index + 1));
  });

  for(let i = rollings.length - 1; i >= 0 ; i--) {
    setTimeout(() => {
      rollings[i].classList.add("active");
    }, 80*(i + 1));
  };

};

