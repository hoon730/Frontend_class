// 사용자에게 숫자 1개를 받습니다
// 해당 숫자가 짝수인지 홀수 인지 확인하여, 짝수라면 
// 알림창에 "짝수" 출력 !! 만약 홀수라면 알림창에 "홀수"
//단 취소 버튼을 클릭 수 있다는 것을 감안 하여 예외조항 처리를 반드시 해주세요!!


let userNumber = prompt("숫자를 입력하세요!");

if(userNumber !== null) {
  userNumber =  parseInt(prompt("숫자를 입력해주세요.", "ex) 43"));
  result = input % 2 === 0  
  ? alert(`${userNumber} : 짝수`) 
  : alert(`${userNumber} : 홀수`);
} 


