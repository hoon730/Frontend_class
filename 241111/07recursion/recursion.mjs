// const myFunc = (number) => {
//   if (number > 10) return;
//   console.log(number);
//   myFunc(number + 1);
// };

// myFunc(1);

// const myFunc = (2) => {
//   if (2 > 3) return;
//   console.log(number);
//   myFunc(number + 1);
// };

// myFunc(1);

// const myFunc = (number) => {
//   if (1 > 3) return;
//   console.log(1);
//   myFunc(1 + 1);
// };

// myFunc(1);

// const funcA = () => {
//   let a = 10;
//   let b = 5;
//   return a + b;
// };

// const funcB = () => {
//   let c = 10;
//   let d = 5;
//   return c - d;
// };

// funcA();
// funcB();

const funcC = () => {
  let a = 10;
  let b = 5;
  return a - b;
};

const funcD = () => {
  let c = 10;
  let d = 5;
  let e = funcC();
  return c + d + e;
};

funcD();
funcC();
