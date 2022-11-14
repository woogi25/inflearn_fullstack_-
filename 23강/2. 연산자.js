// console.log(1%3);

// console.log(1 == 1);
// console.log(1 != 1);
// console.log(1 == "1");
// 값만 비교

// console.log(1 === 1);
// console.log(1 === "1");
// 자료형도 비교

let option1 = 10 > 1;
let option2 = 2 == 3;

console.log(option1 || option2);
console.log(option1 && option2);
console.log(!option1);

let height = 175;
let goodweight = (height - 100) * 0.9;
console.log(`당신의 키는 ${height}이며 적정체중은 ${goodweight}입니다.`)