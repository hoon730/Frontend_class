const button = document.querySelector("button");
const result = document.querySelector("#result");

function* train() {
  yield "판교";
  yield "이매";
  yield "심동";
  yield "경기광주";
  yield "초월";
  yield "곤지암";
  yield "신문도예촌";
  yield "이촌";
  yield "세종대왕릉";
  yield "여주";
}

const gyeonggang = train();

button.addEventListener("click", () => {
  let current = gyeonggang.next();

  if(current.done !== true) result.innerText = current.value;
    else {
    result.innerText = "종점"
    button.setAttribute("disabled", "disabled");
  }

});
