// 1, 3, 5, 7, 9 ,11, 13, 17, 19, 중에서 10보다 
// 큰 수자만 콘솔창에 나타나도록 해주세요!!

const numbers = [1, 3, 5, 7, 9 ,11, 13, 17, 19];

numbers.forEach((num) => {
  if(num > 10) {
    console.log(num);
  }
});


for(let i = 0; i < numbers.length; i++) {
  if(numbers[i] > 10) {
    console.log(numbers[i]);
  }
};



