const nationalityBtn = document.querySelectorAll("#nationality button");

nationalityBtn.forEach((button) => {
  button.addEventListener("click", function(e) {
    e.preventDefault();
    nationalityBtn.forEach((sibling) => {
      if(sibling !== button) {
        sibling.classList.remove("active");
      }
    })
    this.classList.add("active");
  })
});