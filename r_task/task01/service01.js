const userService = (() => {
    // 일단 전체를 가져온다
    const findAll = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "get",
            }
        );
        // users promise객체
        const users = await response.json();
        if (callback) {
            // 기존에는 async라 promise객체를 return 했었음
            // callback(posts)는 통째로 완성된 text값
            // callback(users); //users객체

            return callback(users);
        }
        // return users; promise객체
        // 왜 다른가? 비동기 async니까.
    };

    // JSON 형식은 서버간 데이터 교화이 목적
    // JSON 형식 : {" " : value값}

    // 회원가입
    // 화면에서 입력한 회원 정보를 user 객체로 한 번에 받는다.
    const create = async (user, callback) => {
        // 전달 받은 회원 정보를 서버에 전달한다.
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "post",
                // 원래는 {} 객체 형태로 넣는 것이 맞지만 서버가 js가 아닐 수 있으므로 모든 언어에서 슬 수 있는 문자열로 바꿔줌
                // js에서 json으로 바꿔주는 것은 stringify, 그래서 안에 있는 user객체를 json문자열 값으로 바꿔서 body에 실어서 보내줌
                body: JSON.stringify(user),
                // header에 data를 넣어준다
                headers: {
                    //저장공간을 사용할 수 있게끔, 서버로 보내야될 데이터 넣어주기 request body, 사용자가 주는 것
                    // 넣는 자료형
                    "Content-Type": "application/json; charset=utf-8",
                },
            }
        );

        // 추가된 회원의 정보를 createdUser(객체)에 담는다.
        const createdUser = await response.json();
        if (callback) {
            // callback 함수에 추가된 회원 객체를 전달한다.
            return callback(createdUser);
        }
    };

    //조회
    // 회원 번호를 전달받아서
    const read = async (userId, callback) => {
        // 서버에 전달
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        //
        const user = await response.json();
        console.log(user);
        if (callback) {
            return callback(user);
            // return을 적어주지 않으면 undefined로 나온다. 왜?
            // layout에서 만들어준 text애를 service에서 사용한 함수에서 받아서
            // html로 그대로 넘겨주기 위해 그 값을 그대로 전달하기 위해
            // return 을 사용해주는 것이고 return을 쓰지 않을 때 undefined가 나올 수 밖에 없는 것이다.
            // 돌려주는 것이 없으니까 , 즉 html은 service로 부터 받은 것이 없으니까
        }
    };

    return { findAll: findAll, create: create, read: read };
    //userService는 객체이고 객체가 들어가고 그 객체 안에 함수가 있는 것
    // userService.findAll(userLayout.showList);
})();
