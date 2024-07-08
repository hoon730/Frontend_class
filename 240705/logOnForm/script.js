// 변수 => 값을 담는 그릇
//선언 / 생성 => 전역변수(*global) 지역변수(*local)

const tokenButton = document.querySelector("#token_button");
const tokenNumber = document.querySelector("#token");
const tokenTimer = document.querySelector("#token_timer");
const tokenConfirmButton = document.querySelector("#token_timer_confirmBtn");
const signupButton = document.querySelector("#signup_button");

const changePhone1 = () => {
  const phone1Value = document.querySelector("#phone1").value;
  if(phone1Value.length === 3) {
    document.querySelector("#phone2").focus();
  }
}

const changePhone2 = () => {
  const phone2Value = document.querySelector("#phone2").value;
  if(phone2Value.length === 4) {
    document.querySelector("#phone3").focus();
  }
};

const changePhone3 = () => {
  const phone1Value = document.querySelector("#phone1").value;
  const phone2Value = document.querySelector("#phone2").value;
  const phone3Value = document.querySelector("#phone3").value;

  if(phone1Value.length === 3 && phone2Value.length === 4 && phone3Value.length ===4) {
    tokenButton.style = "background-color: #fff; color: #0068ff; cursor: pointer";
    tokenButton.removeAttribute("disabled");
  }
};

let interval;

const getTokenTimer = () => {
  let timer = 180;
  interval = setInterval(() => {
    if(timer >= 0) {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;
      tokenTimer.innerText = minutes + ":" + String(seconds).padStart(2, "0");
      timer -= 1;
    } else {
      tokenNumber.innerText = "000000";
      tokenButton.style = "";
      tokenButton.setAttribute("disabled", "true");
      tokenTimer.innerText = "3:00";
      tokenConfirmButton.style = "";
      tokenConfirmButton.setAttribute("disabled", "true");

      clearInterval(interval);
    }
  }, 1000)
};

tokenButton.addEventListener("click", (e) => {
  e.preventDefault();
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0"); 
  // 0 ~ 1미만의 실수값(소수점)을 난수 형태로 랜덤생성
  // 0 ~ 1000000
  tokenNumber.innerText = token;
  tokenConfirmButton.removeAttribute("disabled");
  tokenConfirmButton.style = "background-color: #0068ff; color: #fff; cursor: pointer; border: 1px solid #0068ff";
  getTokenTimer();
  // 1분 60초
  // 3분 180초
  //밀리초 시간 개념 => 1초 1000인식
});

tokenConfirmButton.addEventListener("click", function(e) {
  clearInterval(interval);
  e.preventDefault();
  this.style = "background-color: #fff";
  this.setAttribute("disabled", "true");
  this.innerText = "인증완료";
  alert("인증이 완료되었습니다 :D");
  signupButton.style = "backgroung-color: #fff; color: #0068ff; border: 1px solid #0068ff; cursor: pointer;"
  signupButton.removeAttribute("disabled")
});

signupButton.addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const name = document.querySelector("#name").value;
  const password1 = document.querySelector("#password1").value;
  const password2 = document.querySelector("#password2").value;
  const location = document.querySelector("#location").value;
  const genderWoman = document.querySelector("#gender_woman").checked;
  const genderMan = document.querySelector("#gender_man").checked;

  // 단락회로평가 => true / false => 기본값 true || false

  let isValid = true;

  if(email.includes("@") === false) {
      document.querySelector("#error_email").innerText = "이메일을 정상적으로 입력해주세요."
      isValid = false;
    } else {
      document.querySelector("#error_email").innerText = "";
    }

    if(name === "") {
      document.querySelector("#error_writer").innerText = "이름을 입력해주세요."
      isValid = false;
    } else {
      document.querySelector("#error_writer").innerText = "";
    }

    if(password1 === "") {
      document.querySelector("#error_password1").innerText = "비밀번호를 입력해주세요."
      isValid = false;
    } else {
      document.querySelector("#error_password1").innerText = "";
    }

    if(password2 !== password1) {
      document.querySelector("#error_password2").innerText = "비밀번호가 같지 않습니다."
      isValid = false;
    } else {
      document.querySelector("#error_password2").innerText = "";
    }

    if(location !== "서울" && location !=="경기"  && location !=="인천"  && location !=="대구"  && location !=="마산"  && location !=="부산") {
      document.querySelector("#error_location").innerText = "지역을 다시 선택해주세요."
      isValid = false;
    } else {
      document.querySelector("#error_location").innerText = "";
    }

    if(genderMan === false && genderWoman === false) {
      document.querySelector("#error_gender").innerText = "성별을 다시 선택해주세요";
      isValid = false;
    } else {
      document.querySelector("#error_gender").innerText = "";
    }

    if(isValid === true) {
      alert("가입을 축하합니다.")
    }
  });