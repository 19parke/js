// 동적 바인딩 : 컴파일 시 값에 따라 자료형이 동적으로 결정된다.

data = 10;
console.log(typeof data);
console.log(data);
console.log(data + 10);

data = "Grace";
console.log(typeof data);
console.log(data + 3);
console.log(data + "Park");
console.log(`${data} Park`);
