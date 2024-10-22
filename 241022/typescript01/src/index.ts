// TS 타입
// 기본제공타입
// number, srting, boolean, object
// unknown, any, null, undefined, void, symbol, never etc....

// 점진적 타입시스템 => 타임추론 => 타입주석을 입력하지 않아도 타입정의!!
let num = 1;
num = 10;
// num = "10";

let str: string = "Hello";
str = "World";

let bool: boolean = true;

let obj: object = {
  name: "Hoon",
};

// 다양한 종류의 타입 가운데, 치트키 역할!!
// any는 모든 타입을 수용할 수 있음!!
let sample: any = 0;
sample = "Hello";

// undefined
let sample01: undefined = undefined;

let sample02: unknown = 10;
sample02 = true;

// 타입스크립트 계층 구조

//상대적으로 상위랭크되어있는 타입: 슈퍼타입
//상대적으로 하위랭크되어있는 타입: 서브타입

// > 슈퍼타입으로 갈수록 수용할 수 있는 타입의 개수 많아짐
// > 서브타입으로 갈수록 수용할 수 있는 타입의 개수 한정적

// 배열타입!!!
const numArr: number[] = [1, 2, 3];
const strArr: string[] = ["Hoon", "Min"];
const boolArr: Array<boolean> = [true, false, true];

// union타입!!!
const mulitArr: (string | number | boolean)[] = [1, "hello", true];

// 중첩배열!!!
const doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// 길이 & 타입이 고정된 배열 = Tuple타입
let tup1: [number, number] = [1, 2];

const users: [string, number][] = [
  ["Hoon", 1],
  ["Ki", 2],
  ["Min", 3],
  ["Yang", 4],
];
