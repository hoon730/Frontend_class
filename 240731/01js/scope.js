// 2) Scope = 범위
// > 전역 => Global // 1번만 작성해 놓으면 언제 어디서든
// 가져다가 사용가능

// > 지역 => Local // 특정 범위 안에서 설정, 그 범위  안에서만 사용가능

// > Block // 특정 제어문의 조건식 안에서 설정된 변수들은
// Block 범위에서만 움직임

// > Script // 전역변수처럼 해동!!! => let, const

// -break문 :
// 강제종료의 의미를 가지고 있음

// -continue문 :
// 건너뛰기의 의미를 가지고 있음

// > 디버깅!!!

var sum = 0;

const calcSum = (n) => {
  for(let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log(`1부터 ${n}까지 더하면 ${sum}입니다`);
};

calcSum(10);