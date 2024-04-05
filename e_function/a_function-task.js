// 1~10까지 출력하는 함수

function print() {
    let result = "";
    for (let i = 0; i < 10; i++) {
        result += `${i + 1} `;
    }
    console.log(result);
}
print();

// "홍길동"을 n번 출력하는 함수
let n = 4;

function printHong() {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += `${"홍길동"} `;
    }
    console.log(result);
}
printHong();

// 이름을  n번 출력하는 함수
n = 2;

function printName(myName) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += `${myName} `;
    }
    console.log(result);
}
printName("Grace Park");

// 홀수를 짝수로 짝수를 홀수로 변환해주는 함수
function change(number) {
    if (number % 2 == 0) {
        number += 1;
    } else {
        number += 1;
    }
    console.log(number);
}
change(3);
