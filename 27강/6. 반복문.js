// let i = 1;

// while(i <= 10) {
//     console.log("안녕");
//     i++;
// }


// while (i<=50){
//     if(i % 5 == 0){
//         console.log(i);
//     }
//     i++;
// }

// for(let i = 1; i<=10 ; i++) {
//     console.log("안녕");
// }

// for(let i=1 ; i<=50 ; i++){
//     if(i % 5 == 0){
//         console.log(i);
//     }
//     i++;
// }

// const arr = [5,6,7,8];

// // for(let index in arr) {
// //     console.log(arr[index]);
// // }

// for (let item of arr){
//     console.log(item);
// }

const jsonArr = {email: "aaa", password: "bbb"};

for (let key in jsonArr) {
    console.log(jsonArr[key])
}

for (let i=1;i<=10;i++) {
    if(i == 5){
        break;
    }
    console.log(i);
}