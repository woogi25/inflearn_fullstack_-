// 배열 Create
const arr = [3, 4, 5, 6];

// 배열 Read
// arr[0];
console.log(arr[3]);

// arr.slice(1,2)

console.log(arr.slice(1,3));

//배열 update

arr[0] = 100;
console.log(arr);

//배열 delete
arr.splice(0, 2);
console.log(arr);
console.log(arr);

// 1.문자열 생성
const namelist = ["짱구,","철수"];
console.log(namelist);

// 2.훈이 추가
namelist.splice(1, 0, "훈이");
console.log(namelist);

// 3.훈이 -> 유리
namelist[1] = "유리";
console.log(namelist)

// 짱구 삭제
namelist.splice(0, 1);
console.log(namelist);