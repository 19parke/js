// const user = {
//     id: 1,
//     name: "park",
// };

// const numbers = [1, 3, 5, 7];

// 비구조화 할당(구조 분해)
// 기존에 있었던 것을 뿌려서 받고 싶다 = spread
// ... 자체가 등장한다면 rest문법이다.
// 오른쪽 구조에 맞게끔 구조를 써주고 키 값을 작성해줌
// const { id, name } = user;
// const [number1, number2, number3, number4] = numbers;

// 그래서 소속을 굳이 쓸 필요가 없다.
// console.log(id, name);
// console.log(number1, number2);
// 소속을 쓴 경우 : user.id, user.name
// numbers[0], numbers[1] ...

// function printInfo({ id, name }) {
//     console.log(id, name);
// }
// printInfo(user);

// 아래의 코드에서 rest는 id를 제외한 나머지 정보들이 들어간다.
// 그래서 ...rest는 rest문법이다. -> 새로운 객체가 필요할 때 사용
// function test({ id, ...rest }) {
//     console.log(rest);
// }

// let user = {
//     id: 1,
//     name: "park",
//     age: 10,
// };

// test(user);

// ** 중요! 새로운 객체를 만드는 것이다.
// 객체의 전체 정보를 다 가져와서 값을 변경해주는 것
// let user = {
//     id: 1,
//     name: "park",
// };
// user = { ...user, id: 20 };
// console.log(user);

// user = { ...user, age: 24 };
// console.log(user);

// function getTotal(...datas) {
//     console.log(datas);
// }
// getTotal(1, 2, 3, 4);
// getTotal(...[1, 2, 3, 4]);
// console.log([..."ABC"]);

// 매개변수를 몇 개 받아야할 지 모를 때
function getString(...data) {
    console.log(data);
}
getString("1", "2", "3", "4");
getString(..."grace"); //예상 : 'g' 'r' 'a' 'c' 'e'

"1234".split("");
[..."1234"];
// 둘 다 사용할 수 있고 똑같은 Array객체이지만 밑에거가 훨씬 편리

// [ Object 객체 ]는 매개변수로 전달 받을 때 비구조화 할당으로 받는 것이 편하다
// 만약, 새로운 Object 객체가 필요하다면 rest문법을 사용해서 기존 값을 복사해서 사용한다.
let aBungeoppang = {
    type: "팥",
    location: "육교앞",
    price: 2000,
};

bBungeoppang = { ...aBungeoppang, type: "슈크림" };
console.log(bBungeoppang.type);

// [ Array 객체 ]는 매개변수로 전달받을 때
// 몇 개의 매개변수일지 알 수 없을 때 rest문법을 사용해서 받는다.
function getInfo(...info) {
    console.log(info);
}

getInfo("흑임자", "1번출구 앞", 3000);
