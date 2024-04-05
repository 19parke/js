// if (true) {
//     // 함수가 아닌 영역
//     var data = 10; // 영역 밖에서 사용 가능
//     let data = 10; // 영역 밖에서 사용 불가능
// }

// function f() {
//     // 함수 영역
//     var data = 10; // 영역 밖에서 사용 불가능
//     let data = 10; // 영역 밖에서 사용 불가능
// }

// 전역 변수
// 지역 변수와 이름이 겹치면, 지역 안에서는 지역 변수밖에 못쓴다.
// let data = 10;

// global
// 전역 변수를 관리해준다. global에 마침표를 찍고 원하는 전역변수 이름으로 선언한다.
// global.data = 10;

// globalThis
// Node.js에서는 전역변수들을 모두 global로 관리한다.
// 브라우저에서는 window로 전역변수를 관리한다.
// globalThis가 이를 구분해서 window 또는 global로 사용해준다.
globalThis.data = 10;
function f() {
    let data = 20;
    console.log(globalThis.data);

    // 지역변수의 이름과 겹치지 않으면, 그냥 전역변수 이름만 사용하면 된다.
    console.log(data);
}

f();
