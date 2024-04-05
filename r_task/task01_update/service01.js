/*
회원(/users/)
목록->상세->조회->수정->수정 완료

Trouble shooting
    patch
수정 -> 수정완료

오류내용 : CORS(NOT ALLOWED)
서버측에서 해당 요청에 대해 막아놓은 상태
patch를 대문자로 작성하거나, put방식으로 부분수정 요청을 통해 해결함.
*/

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

    // jsonplaceholder 서버에서는 users에 대한 patch요청 시 소문자로 요청하는 것을 막아놓았다.
    // 그 대신, 대문자 PATCH로 요청하거니 put으로 부분 수정을 요청하면 된다.
    // CORS : 서버의 ORIGIN과 요청하는 곳의 ORIGIN이 같아야만 요청 허용
    //      서버에서는 허용할 ORIGIN을 등록함으로써 해당 PC의 요청이 가능해진다.
    // 따라서, 모든 요청 방식은 대문자로 약속한다.
    // 전체 수정
    const update = async (user) => {
        // https://jsonplaceholder.typicode.com/users/ 에 넣기에는 너무 정보가 많으니 header로 전달
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${user.userId}`,
            {
                method: "PUT",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            }
        );
        const updateUser = await response.json();
        console.log(updateUser);
    };

    // 부분 수정
    // const update = async ({ userId, ...rest }) => {
    //     console.log(userId);
    //     const response = await fetch(
    //         `https://jsonplaceholder.typicode.com/users/${userId}`,
    //         {
    //             method: "put",
    //             body: JSON.stringify({ name: "한동석" }),
    //             headers: {
    //                 "Content-Type": "application/json; charset=utf-8",
    //             },
    //         }
    //     );
    //     const updatedUser = await response.json();
    //     console.log(updatedUser);
    // };

    // 삭제
    const remove = async (userId) => {
        await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            method: "DELETE",
        });
    };
    return {
        findAll: findAll,
        create: create,
        read: read,
        update: update,
        remove: remove,
    };
})();
