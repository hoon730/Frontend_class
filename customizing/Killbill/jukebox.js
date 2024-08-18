const trs = document.querySelectorAll(".albumTable_artist");
console.log(trs);
let marginR = 0

trs.forEach((tr) => {
  marginR++
  tr.style.marginRight += `${marginR}px`;
});