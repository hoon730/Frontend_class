// 정규(regular)표현식(expression) = 정규식

// 1) 왜 탄생되었는가?
// - 사용자로부터 form 요소를 활용해서 어떤 값을 전달받는 경우
// 특정 패턴을 설정해놓고 해당 패턴의 true // false 구분
// 및 분류 => 유효성검사 혹은 예외조항처리 효율적

// 2) 패턴 = 규칙 

// 3) 정규표현식은 패턴 & 플래그
// - 패턴 => 공통적인 규칙
// - 플래그 => 옵션

// 4) 정규표현식을 생성하는 방법은 2가지
// - 직접적으로 패턴을 정의하는 방식
// - new 예약어 프로토타입 객체 => 정규표현식
// - new RegExp()


// const regexp = /\d{3}/;
// const regexp = new RegExp(/\d{3}/); 

// console.log(regexp.test("Hello"));
// console.log(regexp.test("123"));

// const str = "ES2024 is powerfull";
// const regexp = /es/i;
// str.replace(/ES2024/, "Javascript");

// console.log(str.match(/ES2024/));
// console.log(str.replace(/ES2024/, "Javascript"));
// console.log(regexp.test(str));

// console.log(str.match(/ES\d\d\d\d/))



// 5) 정규표현식 전용 메서드

// 1) 정규표현식.test(문자열) : 정의해놓은 정규표현식 패턴을 정확하게 따르고 있는지
// 있는지 확인하기 위한 메서드 (true // false)

// 2) 정규표현식.exec(문자열) : 정규표현식에 매칭되는 문자열이 있으면 해당 결과값을 
// 배열의 자료형태로 반환 <-> null 반환

// 3) 문자열match(정규표현식): 해당 문자열 내 정규표현식에 일치하는 값을 찾아줄 때 사용 <-> null 반환

// 4) 문자열.replace(정규표현식, 바꿀 문자열): 해당 문자열에서 정규 표현식에 매칭 되는 문자열을 찾아서 바꿀 문자열로 교체


// 6) 정규표현식에서 자주사용되는 플래그 타입
// - i(international) : 문자열 내 영문자를 찾아오거나 검사할 때, 대소문자를 구별하지 않고 검색

// - g(global) : 입력된 문자열 전역을 검색 // if.g라는 플래그가 입력되니 않는다면 설정한 패턴을 첫번째 문자열만 찾아줌


// 7) 정규표현식에서는 문자열 내에서 특정부분이 숫자의 기원, 문자의 기원 구분할 수 있는 방법을 제시 => 문자 클래스!!

// - 숫자 클래스 (digit class)
// > 패턴을 정의할 때 \d : 0~9가지의 숫자를 찾아올 때
// > 패턴을 정의할 때 \D : 숫자가 아닌 모든 문자를 찾아오고자 할 때

// - 공백 클래스 (space class)
// > 패턴을 정의할 때 \s : 문자열 가운데 공백, 혹은 줄 바꿈 등의 여백요소를 찾아오고자 할 때

// > 패턴을 정의할 때 \S : 문자열 가운데 공백이 아닌 모든 문자를 문자를 찾아오고자 할 때 

// - 단어 클래스 (word class) : 
// > 패턴을 정의할 때 \w : 문자열에 포함되는 숫자, 언더바, 대쉬 등 찾아오고자 할때 
// > 패턴을 정의할 때 \W : 문자열에 포함되지 않은 숫자 언더바, 대쉬등을 찾아오고자 할때

// 8) 정규표현식에서는 시작, 끝 체크하기 위한 목적으로 탄생한 기호
// > ^ : 캐럿 => 문자열의 시작
// **1) 특정법위를 지정하는 []안에서 사용되는 경우, 기존 캐럿의 기능 변경 => 반대의 의미 
// > $ : 달러 => 문자열의 끝

// const hello = "Hello, everyone.";

// console.log(/^H/.test(hello));
// console.log(/^h/.test(hello));
// console.log(/^h/i.test(hello));

// console.log(/one.$/.test(hello));
// console.log(/e.$/.test(hello));
// console.log(/one$/.test(hello));

// const str = "ES2024";

// console.log(str.match(/[^0-9]/g));



// 9) 정규표현식 반복 패턴
// > [문자열] : 특정범위를 지정하고자 할 때
// > {문자열} : 반복패턴 횟수를 지정하고자 할 때
// > 문자열+ : 해당 문자열이 한 번 이상 반복되는 경우
// > 문자열?: 해당 문자열이 1번 있는 경우 (*해당 문자열을 한번도 사용하지 않은 경우에도 true)
// > 문자열* : 해당 문자열 횟수에 관계없이 1번 이상 반복되는 경우 // (*해당 문자열이 특정 반복되지 않고 있는 경우에도 찾아옴)
// > . : 어떤 무자열이 지칭하지 않은 상태에서 그냥 문자라는것이 존재하는지 여부를 검색 /[x..y]/ = xay, xzy // xaby


// const str = "Oooops";
// console.log(str.match(/o{2}/));
// console.log(str.match(/o{2,}/));
// console.log(str.match(/o{2,4}/i));


// 10) 정규표현식, OR검색
// > vertical bar = > 반드시 1개만 사용 // 절대 띄어쓰기 금지(*빈문자열 취급)

// const str2 = "ES2024(ES8) is powerful";
// const regexp = /ES2024|ES8/;
// console.log(regexp.test(str2));




// 1) 숫자만 가능한 정규표현식 패턴
const regexp = /^[0-9]+$/;

// 2) 양의 정수만 가능한 정규표현식 패턴
const regexp1 = /^[1-9]\d*$/;

// 3) 음의 정수만 가능한 정규표현식 패턴
const regexp2 = /^\-[1-9]\d*$/;

// 4) 영문자를 찾아오도록 하는 정규표현식 패턴
const regexp3 = /^[a-zA-Z]+$/;

// 5) 숫자나 영문자를 찾아오도록 하는 정규표현식 패턴
const regexp4 = /^[a-zA-Z0-9]+$/;

// 6) 한글만 찾아오도록 하는 정규표현식 패턴
const regexp5 = /^[가-힣]+$/;

// 7) 한글과 영문자만 가능한 정규표현식 패턴
const regexp6 = /^[가-힣a-zA-Z]+$/;

// 8) 예) 문자열의 길이가 5~10개 패턴
const regexp7 = /^.{5,10}$/;
