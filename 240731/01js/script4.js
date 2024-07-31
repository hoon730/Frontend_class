// > switch문
// - 선택할 수 있는 조건들이 다양한 경우
// - switch() / case / break / default

const subject = prompt("신청할 과목을 선택하세요.", "1-HTML, 2-CSS, 3-JS");

if(subject !== null) {
  switch(subject) {
    case "1" : alert("HTML을 신청하셨습니다.");
    break;
    case "2" : alert("CSS을 신청하셨습니다.");
    break;
    case "3" : alert("JS을 신청하셨습니다.");
    break;
    default: alert("잘못입력했습니다!")
  };
}

// 5. 반복문 (*잘 사용하는지가 중간 레발급에서는 King)
- 기본for문
- forEach문
- for _in문
- for _of문
- while문
- do_while문
- break문
- continue문 
