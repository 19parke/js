function User(name) {
    // 생성자 안에서 this의 역할은 접근한 객체를 의미
    this.name = name;
}

function thisTest() {
    console.log(this);
    console.log(this === global);
}

thisTest();
// thisTest 함수 내에서이 this
// 전역객체인 global가리킴

// 사용한 영역의 상위 객체를 가리킨다.
console.log(this);
console.log(this === global);
console.log(this === module.exports);
// 전역 스코프(=변수나 함수가 정의되어 있는 범위)에서 this
// module.exports라는 객체임

// this의 값이 다른 컨텍스트에 따라 달라진다.

this.is = "test";
function User(name) {
    // 생성자 안에서 this의 역할은 접근한 객체를 의미
    this.name = name;
}

// // 일반 함수는 this를 사용하면, global객체를 의미
function thisTest() {
    console.log(this);
    console.log(this === global);
}
thisTest();

// 화살표 함수는 this를 사용하면, global로 가지 못하고 로컬의 exports를 가리킨다.
// 화살표 함수에서 this를 쓰지 말자!
const arrowTest = () => {
    console.log(this);
    console.log(this === global);
};
arrowTest();

// .js파일 하나가 하나의 함수이다.
// 사용한 영역의 상위 객체를 가리킨다.
// console.log(this);
// console.log(this === global);
// console.log(this === module.exports);
