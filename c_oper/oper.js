/*
// /, % (모듈러스, mod)
console.log(10 / 3);
console.log(10 % 3);

// *
console.log(18 * 3);


// 조건식 : 결과가 참(true) 또는 거짓(false) 둘 중 하나가 나오는 식
// 조건식은 반드시 값으로 본다.
let condition = 10 > 9;
console.log(10 > 9);
console.log(condition);

// == , ===
// ==은 값만 검사하고, ===은 타입도 같이 검사한다.
data1 = "10";
data2 = 10;
console.log(data1 == data2);
console.log(data1 === data2);

// != (값) , !== (값+타입): 같지 않다
console.log(data1 != data2); // 값은 같으므로 false
console.log(data1 !== data2); // 값은 같지만 타입이 다르므로 같지 않다 true


// && , ||
// 조건식 1 && 조건식 2 : 둘 다 true여야 true
// 조건식 1 || 조건식 2 : 둘 중 하나라도 true면 전체가 true
const DATA = 20; // 상수
const condition1 = DATA >= 10;
const condition2 = DATA <= 20;
console.log(condition1 && condition2);
console.log(condition2 || condition2);


// 거짓을 표현하는 값
let condition3 = "";
let condition4;
let condition5 = null;
let condition6 = 0;
let condition7 = 12;

if (condition6) {
    console.log("true");
}


// || : 기본값 설정
// 앞에 작성한 값이 flase를 의미하는 값이라면 뒤에 설정한 값이 대신 사용된다.
let data3 = 0 || 10;
data3 = 3 || 10;
console.log(data3);


// && : 하나라도 false라면, 모두 false이기 때문에 앞의 조건식이 true일때만 다음 문장이 실행된다.
let check = false;
check = true;
let data = 10;
check && (data = 20);
console.log(data);


// :? 삼항 연산자
// 조건식 ? 참일 때 사용할 값 : 거짓을 대 사용할 값
let check = 10 > 11;
console.log((check ? 10 : 11) + 3);

// 누적 연산자
let money = 10000;
money = money - 1000;
money -= 1000;
console.log(money);

// 증감 연산자
let data = 10;
data = data + 1;
data += 1;
data++;
console.log(data);


// 전위형 : 바로 반영
let data = 10;
console.log(++data);

// 후위형 : 다음 줄 부터 반영
data = 10;
console.log(data++);
console.log(data);
*/
