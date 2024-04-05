// 두 정수의 덧셈 결과 출력
// [ 나누기 ]
// 1. 숫자 매개변수 전달 받기, 더하기
// 2. 출력하기

// 일반적 구조
// function add(number1, number2, callback) {
//     if (callback) {
//         callback(number1 + number2);
//     }
//     return number1 + number2;
// }

// function printResult(result) {
//     console.log(result);
// }

// add(1, 2, printResult);
// const result = add(1, 2); // add함수에서 값을 리턴한다.
// console.log(result);

// const add = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 + number2);
//     }
//     return number1 + number2;
// };

// 출력하기가 일회성인 경우
// add(1, 3, (result) => {
//     console.log(result);
// });

// 출력하기를 여러번 사용해야할 경우
// const printResult = (result) => {
//     console.log(result);
// };
// add(1, 4, printResult);
// add(1, 6, console.log);

// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱한 뒤 출력
// const multiply = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 * number2);
//     }
//     return number1 * number2;
// };

// multiply(3, 4, (result) => console.log(result * 2));
/////////////////////////////////////////////My Answer

/////////////////////////////////////////////Other Answer
// function multiply(number1, number2, callback) {
//     if (callback) {
//         callback(number1 * number2);
//     }
//     return number1 * number2;
// }

// function mul2(result) {
//     result = result * 2;
//     console.log(result);
// }

// multiply(2, 3, mul2);
// const final = multiply(2, 4);
// console.log(final);

// const mul = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 * number2);
//     }
//     return number1 * number2;
// };

// mul(2, 5, (result) => {
//     result = result * 2;
//     console.log(result);
// });

// const result = mul(1, 4, (result) => result * 2);
// console.log(result);

// 성과 이름을 전달받아서 풀네임을 만든 뒤 "000님" 출력
// const fullName = (firstName, lastName, callback) => {
//     if (callback) {
//         callback(firstName + lastName);
//     }
//     return firstName + lastName; //callback함수 실행 후에도 즉시 값 반환
// };

// fullName("이", "순신", (result) => console.log(result + "님"));
////////////////////////////////////////////////My Answer

// const nameCard = fullName("박", "은혜", (result) => {
//     return `${result}님`;
// });
// console.log(nameCard);
/*
실행결과 : 박은혜
왜? 문제는 fullName 함수가 콜백 함수를 실행한 후에도 즉시 값을 반환하고 있기 때문입니다. 
따라서 return firstName + lastName; 부분이 먼저 실행되고, 
콜백 함수가 실행된 결과는 무시되고 있습니다.

callback은 비동기 작업이기에 callback의 return이 적절하게 반환되지 않음
대신, fullName 함수가 콜백 함수를 통해 결과를 전달하도록 수정해야 합니다.

[ 수정 코드 ]
const fullName = (firstName, lastName, callback)=>{
    const result = firstName + lastName;
    if(callback){
        callback(result);
    }
    return result;
}

const nameCard = fullName("박", "은헤", (result) =>{
    console.log(`${result}님`);
});
*/

// 상품 1개 가격과 총 가격을 입력받고 개수가 5개 이하면 true 아니면 false

// const calProduct = (price, totalPrice, callback) => {
//     if (callback) {
//         callback(totalPrice / price);
//     }
//     return totalPrice / price;
// };

// calProduct(500, 3333, (amount) => {
//     console.log(amount <= 5 ? true : false);
// });

// 결제 상품 가격과 결제 상태를 전달받아서
// 결제 상태가 true일 때 "000원 결제 완료"
// 결제 상태가 false일 때 "000원 결제 취소" 출력

// const machine = (state, price, callback) => {
//     if (callback) {
//         callback(state, price);
//     }
// };

// const printState = (state, price) => {
//     if (state === true) {
//         console.log(`${price}원 결제 완료`);
//     } else {
//         console.log(`${price}원 결제 취소`);
//     }
// };

// machine(false, 500, printState);
///////////////////////////////////////////////myAnswer

// const setStatus = (price, status, callback) => {
//     let result = status ? `${price}원 결제 완료` : `${price}원 결제 취소`;
//     if (callback) {
//         callback(result);
//     }
//     return result;
// };
// setStatus(3000, false, console.log);

// 숙제
// 콜백함수 문제 3개씩 만들어오기

// 1. 문자열로 저녁 6시가 되면
// "리더보고서 제출해주세요"라는 알림이 뜨게 출력
// 6시가 아닌 경우 공백 문자 출력

// const leaderApp = (time, callback) => {
//     if (callback) {
//         callback(time);
//     }
//     return time;
// };

// const alarm = (time) => {
//     console.log(time === "18:00" ? "리더보고서 제출해주세요" : " ");
// };
// leaderApp("18:00", alarm);

// 2. 비밀번호를 입력하고
// 1q2w3e4r가 아닌 경우 비밀번호가 올바르지 않습니다 출력
// 맞으면 로그인 완료 출력

// const login = (password, callback) => {
//     let status =
//         password === "1q2w3e4r"
//             ? "로그인 완료"
//             : "비밀번호가 올바르지 않습니다";
//     if (callback) {
//         callback(status);
//     }
//     return status;
// };
// login("1q223e4r", console.log);

// 3. 두 개 상품 가격 입력 받고 총가격 출력하기

const totalPrice = (price1, price2, callback) => {
    if (callback) {
        callback(price1 + price2);
    }
    return price1 + price2;
};

totalPrice(2000, 3000, (result) =>
    console.log(`결제하실 총 금액은 ${result}원 입니다.`)
);
