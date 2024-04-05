// f{x} = 2x+1;
// function f(x) {
//     return 2 * x + 1;
// }
// let result = f(2);
// console.log(result);

// 두 정수의 곱셈을 구해주는 함수
// function multiply(number1, number2) {
//     return number1 * number2;
// }
// console.log(multiply(3, 5));

// Default Parameter
// 필수로 받아야 하는 매개변수가 아닌, 선택사항으로 받는 매개변수를 설정한다.
// 전달 받은 값이 없을 경우 원하는 기본 값으로 설정할 수 있다.
// function add(number1, number2, number3 = 0) {
//     return number1 + number2 + number3;
// }
// let result = add(1, 2, 3);
// console.log(result);
// result = add(3, 4);
// console.log(result);

//아이디 비밀번호 닉네임을 전달받는다.
// 이 대 닉네임의 기본 값은 '익명'으로 설정한다.

// function login(id, pw, nickname = "anonymous") {
//     console.log(
//         "id : " + `${id} `,
//         "pw : " + `${pw} `,
//         "nickname : " + `${nickname}`
//     );
// }
// login("grace", 1111);
