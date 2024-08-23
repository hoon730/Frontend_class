// const step1 = (callback) => {
//   setTimeout(() => {
//     console.log("피자도우준비");
//     callback();
//   }, 2000)
// };

// const step2 = (callback) => {
//   setTimeout(() => {
//     console.log("토핑 완료");
//     callback();
//   }, 2000);
// }

// const step3 = (callback) => {
//   setTimeout(() => {
//     console.log("굽기완료");
//     callback();
//   }, 2000);
// }

// console.log("피자를 주문합니다!");

// step1(() => {
//   step2(() => {
//     step3(() => {
//       console.log("피자가 준비되었습니다!");
//     });
//   })
// });

const pizza = () => {
  return new Promise((resolve, reject) => {
    resolve("피자를 주문합니다!");
  });
}

const step1 = (messege) => {
  console.log(messege);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("피자 도우 준비");
    }, 3000);
  });
}

const step2 = (messege) => {
  console.log(messege);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("토핑완료");
      }, 3000);
    });
}

const step3 = (messege) => {
  console.log(messege);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("굽기완료");
      }, 3000);
    });
}



pizza()
.then(step1)
.then(step2)
.then(step3)
.then(console.log)
.then(() => console.log("피자가 준비되었습니다"));
