// intro
  const lines = document.querySelectorAll(".line");
  const rising = document.querySelector(".rising");
  const intro = document.querySelector(".intro");

  // lines.forEach((line, index) => {
  //   setTimeout(() => {
  //     line.classList.add("active");
  //   },80 * (index + 1));
  // });
  // rising.classList.add("active");
  // intro.classList.add("active");

  // for(let i = 0; i <= lines.length; i++) {
  //   rising.classList.add("active");
    
  //   if(i === lines.length) {
  //     intro.classList.add("active");
  //   } else {
  //     lines[i].classList.add("active");
  //   }
  // };


// Ranking Kill bill movie
const stars = document.querySelectorAll(".detail_box ul .fa-star");
const print = document.querySelector(".print");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((item, i) => {
      console.log(index, i)
      if(i <= index) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    let message = "";

    switch(index) {
      case 0:
        message = "1";
        break;
      case 1:
        message = "2";
        break;
      case 2:
        message = "3";
        break;
      case 3:
        message = "4";
        break;
      case 4:
        message = "5";
        break;
    }

    print.innerText = `${message}/5`

  });
});

const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuJukebox = document.querySelector("#menuJukebox");
const contentFrame = document.querySelector("#contentFrame");
const titleList = ["트레일러 & 스토리", "리뷰 & 평점", "BGM & OST"];
const rightTitle = document.querySelector(".right_header_title");

const homeChange = () => {
  contentFrame.setAttribute("src", "./home.html");
  menuHome.style = `background: #000;
  color: #efda1c; border: 1px solid #efda1c`;
  menuGame.style = `background: linear-gradient(to bottom, #efda1c, #aa9c17, #55510F);
  color: #000;`;
  menuJukebox.style =`background: linear-gradient(to bottom, #efda1c, #aa9c17, #55510F);
  color: #000;`;
  rightTitle.innerText = titleList[0];
};
const gameChange = () => {
  contentFrame.setAttribute("src", "./game.html");
  menuHome.style =  `background: linear-gradient(to bottom, #efda1c, #aa9c17, #55510F);
  color: #000;`;
  menuGame.style = `background: #000;
  color: #efda1c; border: 1px solid #efda1c`;
  menuJukebox.style =  `background: linear-gradient(to bottom, #efda1c, #aa9c17, #55510F);
  color: #000;`;
  rightTitle.innerText = titleList[1];
};
const jukeboxChange = () => {
  contentFrame.setAttribute("src", "./jukebox.html");
  menuHome.style = `background: linear-gradient(to bottom, #efda1c, #aa9c17, #55510F);
  color: #000;`;
  menuGame.style = `background: linear-gradient(to bottom, #efda1c, #aa9c17, #55510F);
  color: #000;`;
  menuJukebox.style =`background: #000;
  color: #efda1c; border: 1px solid #efda1c`;
  rightTitle.innerText = titleList[2];
};

menuHome.addEventListener("click", homeChange);
menuGame.addEventListener("click", gameChange);
menuJukebox.addEventListener("click", jukeboxChange);



