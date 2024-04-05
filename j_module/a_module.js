// 선언과 동시에 사용
// (function () {})();

// const module = (function () {
//     function a() {}
//     function b() {}
//     function c() {}
//     function d() {}
//     return { a: a, b: b, c: c, d: d };
// })();

// module.a();
// module.b();
// module.c();
// module.d();

// [모듈화 내 언어로 설명하기]
// 모듈화는 함수 선언과 (function () {}) 동시에 사용(); 하는 것이다.
// 그래서 module에 함수의 return 값이 담겨 있다.
// a:는 키값이고 a는 실제 value이다.
// 여기서 value는 function a(){}에서 선언한 함수이니 일반 값이 아니라 주소값이다.
// 그래서 밖에서 사용하기 위해서는 return 값이 담긴 module변수를 사용하고
// 값이 아니라 주소값이니 .a()로 사용해준다.

const userService = (() => {
    // 회원가입
    // 회원 가입 시 이메일, 비밀번호, 이름과 같은 개인정보 전달
    const join = ({ email, password, name }) => {};

    // 로그인
    // 로그인 시 필요한 정보 : 이메일, 비밀번호 전달
    const login = (email, password) => {};

    // 마이페이지
    // 내 페이지를 클릭할 때 따로 전달할 것은 없다.
    const select = () => {};

    // 회원 수정
    // 정보에 대한 수정이므로 회원 전체 정보(=객체) 전달
    const update = (user) => {};

    // 회원 탈퇴
    // 탈퇴 시 다른 정보를 전달해줄 필요 없음
    const remove = () => {};

    // 각각의 키값과 join, login, select, update, remove 함수에 대한 주소값
    return {
        join: join,
        login: login,
        select: select,
        update: update,
        remove: remove,
    };
})();

let user = {
    email: "test@gmail.com",
    password: "1234",
    name: "테스트",
};

// return 값이 담김 module함수의 이름으로 사용
// 값이 아니라 주소값이니 .함수명(매개변수)로 사용
userService.join(user);
userService.login("test@gmail.com", "1234");
userService.login(user.email, user.password);
