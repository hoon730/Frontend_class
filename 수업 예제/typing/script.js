const content = "Hi😉 I'm Hoon. \n Front-End Developer. \n Welcome to My Casa✌";

const text = document.querySelector(".text");

let i = 0;

const typing = () => {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "</br>" : txt;
  
  if(i > content.length) {
    text.textContent = "";
    i = 0;
  }
};

setInterval(typing, 250);
