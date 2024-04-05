// findAll이 동기일 때

// Promise 기반의 비동기 코드를 동기 코드처럼 보이게, 읽기 쉽게
// const userService = ((callback) => {
//     const findAll = () => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then((response) => response.json())
//             .then((users) => {
//                 if (callback) {
//                     callback(users);
//                 }
//             });
//     };

//     const findById = () => {};
// })();

// 둘 다 같은 비동기 함수
// async function test() {}
// const test = async () => {};

// async 함수 내부에서 await 키워드를 사용하여 Promise 결과를 기다림.
// then 메서드를 사용하는 대신 Promise를 처리

// 회원 관련 서비스 모듎
const userService = (() => {
    // 첫 번째 메소드, 비동기 메소드(await 쓸 수 있다!)
    const findAll = async (callback) => {
        // callback을 전달 받는다.
        // 저 경로로 요청한다.
        // 요청에 맞는 응답을 response에 담는다.
        // findAll을 비동기로 만들기 위해서 (비동기 안에서는 순서대로 작동)
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        // 내가 필요한 데이터를(Promise객체를) json()으로 가져온다.
        const users = await response.json();
        if (callback) {
            // 데이터를 callback에 전달한다.
            callback(users);
        }
    };

    const findById = async (id, callback) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const user = await response.json();
        if (callback) {
            callback(user);
        }
    };

    return { findAll: findAll, findById: findById };
})();

userService.findAll(console.log);
userService.findById(3, console.log);
