// datas라는 Array객체를 한 개 선언한다.
// datas에 1~5까지 값을 담은 뒤
// 각 값에 + 5를 해서 출력하기
// let datas = new Array(5).fill(0);
// datas.forEach((_, i, datas) => {
//     datas[i] = i + 1;
// });
// console.log(datas);
// datas.map((_, i, datas) => {
//     console.log(datas[i] + 5);
// });

// datas라는 Array 객체를 한 개 선언한다.
// datas에 1~10까지 중 짝수만 담는다.
// datas의 모든 요소(값)을 ":"으로 연결하여 출력한다.
// let datas = new Array();
// forEach함수는 이미 만들어져 있는 배열에서 해당 배열의 길이만큼만 반복할 수 있어서
// 반복 횟수를 지정할 수 없다.
// datas.forEach(()=>{

// })
// for (let i = 0; i < 10; i++) {
//     (i + 1) % 2 == 0 ? datas.push(i + 1) : false;
// }
// console.log(datas.join(":"));

// datas라는 Array객체를 한 개 선언한다.
// datas에 1~10까지 담는다.
// 첫 번째 값을 제외한 나머지 요소(값)를 추출한다.
// 추출한 Array객체에서 홀수만 출력한다.
// let datas = new Array(10).fill(0);
// datas.forEach((_, i, datas) => {
//     datas[i] = i + 1;
// });
// [ 잘못된 시도들 ]
// let otherDatas = datas.map((data, idx, datas) => {
//     idx > 0 ? data : false;
// });
// undefined 10개

// let otherDatas = datas.filter((data, idx) => {
//     idx !== 0;
// });
// (0) []

// 추출함수 이용! slice (splice(삭제 및 교체)와 헷갈리지 않기 )
// datas = datas.splice(1);
// datas.map((data) => {
//     data % 2 === 1 ? console.log(data) : false;
// });

// datas라는 Array객체를 한 개 선언한다.
// datas에 1~10까지 담는다.
// datas에서 짝수만 삭제한다.
// let datas = [];
// push 이용해보기
// for (let i = 0; i < 10; i++) {
//     datas.push(i + 1);
// }
// 삭제했을 때 인덱스가 줄어든다는 것을 고려해야 한다.
// for (let i = 0; i < datas.length; i++) {
//     if (datas[i] % 2 == 0) {
//         datas.splice(i, 1);
//     }
// }
// console.log(datas);

// datas라는 Array객체를 한 개 선언한다.
// datas에 1~10까지 담는다.
// 홀수만 모두 2를 빼주기
// let datas = new Array(10).fill(0);
// datas.forEach((_, i, datas) => {
//     datas[i] = i + 1;
// });
// [ 잘못된 풀이 ]
// .map() 메서드 내부의 콜백 함수에서 반환값이 지정되지 않았기 때문
// 명시적으로 값을 반환하지 않으면, 해당 요소의 반환값은 undefined
// map 함수는 보통 원본 배열을 변경하지 않고 새로운 배열을 생성하는 데 사용됩니다.
// 원본 배열을 변경하는 로직이 필요하다면 forEach를 사용하는 것이 더 적합
// datas = datas.map((_, idx, datas) => {
//     datas[idx] % 2 == 1 ? (datas[idx] -= 2) : false;
//}); //undefined
// let oddData = datas.map((data) => {
//     return data % 2 == 1 ? (data -= 2) : data;
// });
// console.log(oddData);

// 회원 정보
// 번호, 이름, 나이
// 1,  user1, 18
// 2, user2, 19
// 3, user3, 20

// 생성자 만들기
// function User(number, name, age) {
//     this.number = number;
//     this.name = name;
//     this.age = age;
// }

// let users = [];
// for (let i = 0; i < 3; i++) {
//     users.push(User(i + 1, `user${i + 1}`, 18 + i));
// } // 왜 undefined가 나올까?? A : new User 라고 선언!!

// for (let i = 0; i < 3; i++) {
//     users.push(new User(i + 1, `user${i + 1}`, 18 + i));
// }
// 회원 목록 중 회원 이름만 출력
// users.forEach((user) => {
//     console.log(user.name);
// });
// 회원 목록 중 나이가 20살 이상인 회원 추출후 전체 정보 출력
// slice? filter?
// let result = users.filter((user) => user.age >= 20);
// console.log(result); //(1) [User]라고 출력

// Answer
// users
//     .filter((user) => user.age >= 20)
//     .forEach((user) => console.log(user.number, user.name, user.age));

// 상품 정보
// 번호, 상품명, 가격, 구매회원
// 3, 상품1, 3000, user1
// 8, 상품3, 1000, user2
// function Product(number, productName, price, user) {
//     this.number = number;
//     this.productName = productName;
//     this.price = price;
//     this.user = user;
// }
// let products = [
//     new Product(3, "상품1", 3000, users[0]),
//     new Product(8, "상품3", 1000, users[1]),
// ];

// 상품 목록을 , 상품을 구매한 구매 회원의
// 목록으로 변경한다.
// let buyers = products.map((product) => product.user);

// 구매자의 전체 정보를 출력한다.
// for (let i = 0; i < buyers.length; i++) {
//     console.log(`${buyers.number} : ${buyers.name}, ${buyers.age}살`);
// }
//왜 undefined 출력 ? Answer : 올바르게 속성에 접근하지 못하고 있음
// buyers자체는 배열이므로 배열의 각 요소에는 접근하지 못한다.
// 올바른 접근 방법은 배열의 각 요소, 즉 buyers[i]를 사용
// console.log(`${buyers[i].number} : ${buyers[i].name}, ${buyers[i].age}살`);

// buyers.forEach((buyer) =>
//     console.log(`${buyer.number} : ${buyer.name}, ${buyer.age} 살`)
// );

// **스스로 만들어보기 : 댓글, 게시글등으로 만들어보기
// function Comment(number, writer, content) {
//     this.number = number;
//     this.writer = writer;
//     this.content = content;
// }
// let comments = [];
// for (let i = 0; i < 3; i++) {
//     comments.push(
//         new Comment(i + 1, `writer${i + 1}`, `This is comment${i + 1}`)
//     );
// }
// 댓글 목록 중 댓글 내용만 출력
// comments.forEach((comment) => console.log(comment.content));
// 댓글 목록 중 2,3번째 회원 추출후 전체 정보 출력
// comments
//     .filter((comment) => comment.number > 1)
//     .forEach((comment) =>
//         console.log(
//             `${comment.number} : ${comment.writer} => "${comment.content}"`
//         )
//     );

// function Post(number, title, comment) {
//     this.number = number;
//     this.title = title;
//     this.comment = comment;
// }

// let posts = [
//     new Post(100, "Title1", comments[0]),
//     new Post(105, "Title5", comments[2]),
// ];
// 게시글의 숫자와, 제목만 출력
// posts.forEach((post) => console.log(post.number, post.title));

// 게시글 목록을 , 게시글의 댓글목록으로 변경한다.
// let commentList = posts.map((post) => post.comment);
// 댓글 전체 정보를 출력한다.
// for (let i = 0; i < commentList.length; i++) {
//     console.log(
//         commentList[i].number,
//         commentList[i].writer,
//         commentList[i].content
//     );
// }

// 1~100까지 합 출력
// let datas = new Array(100).fill(0).forEach((_, i) => i + 1);
// forEach는 반환값이 없다. 단지 배열의 각 요소에 대해 함수를 실행할 뿐
// let datas = new Array(100).fill(0).map((_, i) => i + 1);
// let total = datas.reduce((total, num) => total + num);
// console.log(total);

// [학원 내용]

/////////////////////////////////////////////////////////////////////////////////////////////
// datas라는 Array객체를 한 개 선언한다.
// datas에 1~5까지 값을 담은 뒤
// 각 값에 + 5를 해서 출력하기

// 값을 넣는 부분
// let datas = new Array();
// let datas = [];
// for (let i = 0; i < 5; i++) {
//     datas.push(i + 1);
//     // datas[i] = i+1;
// }

// // 값을 사용하는 부분
// for (let i = 0; i < datas.length; i++) {
//     datas[i] += 5;
//     // console.log(datas[i]+5);
// }
// console.log(datas);

// datas라는 Array 객체를 한 개 선언한다.
// datas에 1~10까지 중 짝수만 담는다.
// datas의 모든 요소(값)을 ":"으로 연결하여 출력한다.
// let datas = [];
// for (let i = 0; i < 10; i++) {
//     if ((i + 1) % 2 == 0) {
//         datas.push(i + 1);
//     }
// }
// console.log(datas.join(":"));

// let datas = [];
// datas.concatenate = function () {
//     return this.join(":");
// };

// for (let i = 0; i < 5; i++) {
//     datas[i] = (i + 1) * 2;
// }
// const result = datas.concatenate();
// console.log(result);

// datas라는 Array객체를 한 개 선언한다.
// datas에 1~10까지 담는다.
// 첫 번째 값을 제외한 나머지 요소(값)를 추출한다.
// 추출한 Array객체에서 홀수만 출력한다.
// let datas = [];
// for (let i = 0; i < 10; i++) {
//     datas[i] = i + 1;
// }
// datas = datas.slice(1);
// for (let i = 0; i < 4; i++) {
//     if (data[i] % 2 == 1) {
//         console.log(datas[i]);
//     }
// }

// let datas = [];

// for (let i = 0; i < 10; i++) {
//     datas[i] = i + 1;
// }

// let datasSliced = datas.slice(1);

// for (let data of datasSliced) {
//     // if (data % 2 == 1) {
//     //     console.log(data);
//     // }
//     data % 2 == 1 && console.log(data);
// }

// datas라는 Array객체를 한 개 선언한다.
// datas에 1~10까지 담는다.
// datas에서 짝수만 삭제한다.
// let datas = [];
// for (let i = 0; i < 10; i++) {
//     datas[i] = i + 1;
// }
// // for (let i in datas) {
// //     if (i % 2 == 1) {
// //         datas.splice(i, 1);
// //     }
// // }

// for (let i = 0; i < datas.length; i++) {
//     if (datas[i] % 2 == 0) {
//         datas.splice(i, 1);
//     }
// }
// console.log(datas);

// Array.prototype.setFrom1to10 = function () {
//     for (let i = 0; i < 10; i++) {
//         this[i] = i + 1;
//     }
// };
// let datas = [];
// datas.setFrom1to10();

// datas의 길이에 변화를 주면, 변화된 datas가 매번 불러온다.
// 기존 인덱스의 값이 달라질 수 있다.(반복 횟수는 처음에 정해지기 때문에)
// 아래와 같은 코드는 사용하지 않는 것이 좋다.
// for (let i in datas) {
//     if (i % 2 == 1) {
//         datas.splice(i, 1);
//     }
// }

// for (let i in datas) {
//     console.log(i);
//     console.log(datas[i]);
//     // 인덱스가 댕겨져도 반복횟수는 같기 때문에,
//     // 정확히 짝수를 찾은 뒤 그 인덱스를 삭제한다.
//     if (datas[i] % 2 == 0) {
//         datas.splice(i, 1);
//     }
//     console.log("==");
// }

// for (let i = 0; i < 5; i++) {
//     datas.splice(i + 1, 1);
// }

// console.log(datas);

// 트러블 슈팅
/********************************/
// i
// 0 1 2 3 4

// 처음에 생각했던 짝수의 인덱스
// 1 3 5 7 9
/********************************/

/**************************************************/
// 하나를 삭제할 때마다 인덱스가 1씩 당겨진다.
// 1 2 3 4 5 6 7 8 9 10
// 1 3 4 5 6 7 8 9 10
// 1 3 5 6 7 8 9 10
// 1 3 5 7 8 9 10
// 1 3 5 7 9 10
/**************************************************/

/**************************************************/
// i
// 0 1 2 3 4

// 규칙을 찾았을 때 짝수가 있는 인덱스
// 1 2 3 4 5
/**************************************************/

// for (let i = 0; i < 5; i++) {
//     datas.splice(i + 1, 1);
// }

// console.log(datas);

// datas라는 Array객체를 한 개 선언한다.
// datas에 1~10까지 담는다.
// 홀수만 모두 2를 빼주기

//Array.prototype.setFrom1to10 = function () {
//    for (let i = 0; i < 10; i++) {
//        this[i] = i + 1;
//    }
//};
//let datas = [];
//datas.setFrom1to10();

// my solution
// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         datas.splice(i, 1, datas[i] - 2);
//     }
// }
// for (let i in datas) {
//     // if (i % 2 == 0) {
//     //     datas.splice(i, 1, datas[i] - 2);
//     // }
//     i % 2 == 0 && datas.splice(i, 1, datas[i] - 2);
// }
// console.log(datas);

// 회원 정보
// 번호, 이름, 나이
// 1,  user1, 18
// 2, user2, 19
// 3, user3, 20

// 회원 목록 중 회원 이름만 출력
// 회원 목록 중 나이가 20살 이상인 회원 추출후 전체 정보 출력

// function User(number, name, age) {
//     this.number = number;
//     this.name = name;
//     this.age = age;
// }

// let users = [];

// for (let i = 0; i < 3; i++) {
//     users.push(new User(i + 1, `user${i + 1}`, 18 + i));
// }

// 회원 목록 중 회원 이름만 출력
// users.forEach((user) => {
//     console.log(user.name);
// });

// 회원 목록 중 나이가 20살 이상인 회원 추출 후 전체 정보 철력
// users
//     .filter((user) => user.age >= 20)
//     .forEach((user) => {
//         console.log(`${user.number}. ${user.name} : ${user.age}살`);
//     });

// 상품 정보
// 번호, 상품명, 가격, 구매회원
// 3, 상품1, 3000, user1
// 8, 상품3, 1000, user2

// 상품 목록을 , 상품을 구매한 구매 회원의
// 목록으로 변경한다.
// 구매자의 전체 정보를 출력한다.

// function Product(number, name, price, user) {
//     this.number = number;
//     this.name = name;
//     this.price = price;
//     this.user = user;
// }

//let products = [
//    new Product(3, "상품1", 3000, users[0]),
//    new Product(8, "상품3", 1000, users[1]),
//];

// 상품 목록을, 상품을 구매한 구매 회원의 목록으로 변경
//let buyers = products.map((product) => product.user);

// 구매자의 전체 정보 출력
//buyers.forEach((buyer) => {
//    console.log(`${buyer.number}. ${buyer.name} : ${buyer.age}`);
//});

// **스스로 만들어보기 : 댓글, 게시글등으로 만들어보기

// 1~100까지 합 출력
// let datas = new Array(100).fill(0).map((_, i) => i + 1);
// const total = datas.reduce((total, number) => total + number);
// console.log(total);
