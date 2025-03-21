// const numArr: number[] = [1, 2, 3];
// const strArr: string[] = ["hello", "world"];
// const boolArr: Array<boolean> = [true, false, true];

// let mutiArr: (number | string)[] = [1, "hello"];

// let doubleArr: number[][] = [
//   [1, 2, 3],
//   [4, 5],
// ];

// let tup1: [number, number] = [1, 2];

// // tup1 0= [1, 2, 3];

// tup1.push(5);

// TS
// 객체 & 함수 타입 정의

const user: {
  id?: number;
  name: string;
} = {
  name: "Hoon",
};

// const result = user.id;
// 구조적 타입시스템을 적용
// 점진적 타입시스템
// 선택적 타입적용

let config: {
  readonly apikey: string;
} = {
  apikey: "3215448754",
};

// config.apikey = "Hacked"

// type User = {
//   id: number;
//   name: string;
//   location: string;
// };

// let user1: User = {
//   id: 1,
//   name: "Hoon",
//   location: "Seoul",
// };

// let user2: User = {
//   id: 2,
//   name: "Min",
//   location: "Andong",
// };

// const fnc = () => {
//   type User = {};
//   // 타입 지역에선 선언 가능
// };

// type User = {};
// 타입 전역에서 재선언 불가

// 인덱스 시그니처
// > 타입별칭으로 어떤 타입을 정의 => 하위 요소의 모든 타입의 형태가 동일한 경우

type CountryCodes = {
  [key: string]: string;
};

const countyCodes: CountryCodes = {
  Korea: "ko",
  UnitedStates: "us",
  UnitedKingdom: "uk",
};

// 최우선의 방법 추천x
// 객체의 타입 : interface 타입

interface User01 {
  id: number;
}

// implements // extends

interface Person {
  name: string;
  age: number;
  etc?: boolean;
}

const person01: Person = {
  name: "Hoon",
  age: 20,
};

const person02: Person = {
  name: "Hoon",
  age: 20,
  etc: true,
};

class Person1 {
  name: string;
  age: number;
}

const person03: Person1 = new Person1();
person03.name = "Hoon";
person03.age = 20;
// 클래스는 하나의 타입으로 인식이됨

// console.log(person03);

// 바닐라 자바스크립트 클래스 생성
// class Person2 {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Person2 {
//   constructor(public name: string, public age?: number) {}
// }

// const person04 = new Person2("Ki");
// // console.log(person04);

// interface Person5 {
//   name: string;
//   age: number;
// }

// class Person6 implements Person5 {
//   constructor(public name: string, public age: number) {}
// }

// const person05 = new Person6("Min", 24);
// console.log(person05)

// 추상클래스
// 추상화
// 형태가 없는 비정형화된 사물을 표현하는 것
// 어떤 클래스를 정의하기 위해서 추상적인 개념을 만들어 놓고, 해당 추상적인 개념을 모티브로 클래스를 선언 & 생성

abstract class Person7 {
  constructor(public name: string, public age: number) {}
}

class Person8 extends Person7 {
  constructor(name: string, age: number) {
    super(name, age);
  }
}

const person06 = new Person8("Han", 25);
// console.log(person06);

// static 속성

class TestA {
  static initialValue = 1;
}

const test01A = TestA.initialValue;

// console.log(test01A);

// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }

// const user1 = {
//   name: "Hoon",
//   role: Role.ADMIN,
// };

// const user2 = {
//   name: "Hoon",
//   role: Role.USER,
// };

// const user3 = {
//   name: "Hoon",
//   role: Role.GUEST,
// };

// console.log(user1, user2, user3);

let test01: any = 10;
test01 = "Hello";

let test02: unknown;
test02 = "world";
test02 = 1;
test02 = () => {};

let test03 = test01;

let test04: number = 20;

// 타입 제한 적용
if (typeof test02 === "number") {
  test04 = test02;
}
// test04 = test02;
// unknown은 값을 받아올 수 있지만 재할당은 불가능 !! any와의 차이점

const func1 = (): string => {
  return "hello";
};

const func2 = (): void => {
  console.log("World");
};

let test05: void;

// test05 = 1;
// test05 = "hello";
// test05 = true;

test05 = undefined;

let test06: never;

// test06 = 1;
// test06 = "hello";
// test06 = true;
// test06 = undefined;
// test06 = any;
// test06 = null;

// const func3 = (): never => {
//   while (true) {}
// };

// let obj: object = {
//   name: "Hoon",
// };

// interface Nameable {
//   name: string;
// }

// // 타입단언
// let name1 = (<Nameable>obj).name;
// let name2 = (obj as Nameable).name;

// console.log(name1, name2);

const add = (a: number, b: number): number => {
  return a + b;
};

// 타입별칭
type PrintMeFnc = (name: string, age: number) => void;

// 함수 시그니처

const printMe: PrintMeFnc = (name, age) => {
  console.log(`name: ${name}, age: ${age}`);
};

interface Nameable02 {
  name: string;
}

// 타입가드를 설정
// const getName = (obj: Nameable02) => {
//   return obj !== undefined ? obj.name : "Loading...";
// };

// const dataResult = getName(undefined);

// console.log(dataResult);
// console.log(getName({ name: "Hoon" }));

const getName = (obj: Nameable02 | undefined) => {
  return obj !== undefined ? obj.name : "Loading...";
};
