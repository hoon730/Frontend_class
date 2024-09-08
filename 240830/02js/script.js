// 현재 우리 눈에 보여지고 있는 문서의 높이 자체 : innerHeight 스크롤이 가능한 영역까지 포함한 문서의 높이 자체 : scrollHeight

// documentHeight = scrollHeight - innerHeight = 순수하게 스크롤이 되었을 때 볼 수있는 영역

// window.scrollY / documentHeight * 100

// 2px / 스크롤이 가능한 full 영역 * 100

const h1 = document.querySelector("h1");
const progressBar = document.querySelector(".bar");

const percent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0);
};

window.addEventListener("scroll", (e) => {
  const scrollNum = window.scrollY;
  const documentHeight = document.body.scrollHeight - window.innerHeight;

  const per = `${percent(scrollNum, documentHeight)}%`;

  h1.innerText = per;
  progressBar.style.width = per;
});


