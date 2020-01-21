// ①引数２つの値を足算した値を返却する関数
const add = function(number1, number2) {
  return number1 + number2;
};
const sum = add(1, 1);
console.log(sum);

// ②引数２つの値を引算した値を返却する関数
const sub = (number1, number2) => {
  return number1 - number2;
};
const total = sub(10, 1);
console.log(total);

// ③引数２つの値を割り算した値を返却する関数
const div = (number1, number2) => {
  return number1 / number2;
};
const all = div(10, 1);
console.log(all);

// ④引数２つの値を掛け算した値を返却する関数
const multi = (number1, number2) => {
  return number1 * number2;
};
const amount = multi(5, 5);
console.log(amount);
