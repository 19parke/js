// https://jsonplaceholder.typicode.com/users
// zipcode만 추출해서 출력하기

// 잘못된 정답 , 이유 :users는 fetch로부터 받은 응답에서 json() 메소드를 통해 변환된 객체의 배열이며,
// 각 사용자 객체에 대해 직접 address.zipcode에 접근하려고 하면 문제 발생
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) => {
//         console.log(`zipcode : ${users.address.zipcode}`);
//     });
// 수정 :
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) => {
//         users.forEach((user) => {
//             console.log(`zipcode : ${user.address.zipcode}`);
//         });
//     });

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) => {
//         console.log(users.map((user) => user.address.zipcode));
//     });

// https://jsonplaceholder.typicode.com/comments
// 게시글 번호(postId)가 10번인 댓글 전체 출력

// 잘못된 정답 , 이유 :중괄호({})를 사용하지 않을 때 자동으로 표현식의 결과를 반환
// return 키워드가 누락되었기 때문
// .filter() 메소드는 각 요소에 대해 실행되는 콜백 함수에서
// true를 반환할 때 해당 요소를 새 배열에 포함시킴
// 하지만 현재 콜백 함수에서는 아무런 값도 반환하지 않고 있습니다
// (undefined가 반환되므로, 모든 요소가 필터링에서 제외됩니다).
// fetch("https://jsonplaceholder.typicode.com/comments")
//     .then((response) => response.json())
//     .then((posts) => {
//         posts
//             .filter((post) => post.postId === 10)
//             .forEach((post) => console.log(post.body));
//     });

// 잘못된 정답 ????
// fetch("https://jsonplaceholder.typicode.com/comments")
//     .then((response) => response.json())
//     .then((comments) => {
//         console.log(comments.filter((comment) => comment.postId === 10));
//     });
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((user) => {
//         console.log(user.email);
//     });
////////////////////////////////////////////////////내 정답

// 통신은 통신에서 끝내라
// comments 다음 작업을 하는 함수로 전달하고 싶은 것

// 각 결과를 console.log(1) 다음에 출력하게 하기
// 이 때 직접 만든 함수에서 작업한다.

// 예시 )
// function test() {
//     console.log(결과);
//     console.log(1);
// }

// 출력 예시)
// 결과
// 1

// 통신결과만 가져온 것
const getUsers = (callback) => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => {
            // 비동기 안에
            if (callback) {
                callback(users); //동기를 넣어 전부 비동기로 바꾼것
            }
        });
};
// callback으로 가져옴

// 선언, 사용은 위의 callback에서 사용
// 그래서 코드 전체가 전부 비동기
// 왜 ? 사용을 비동기에서 했으니까 callback(users); ->사용

const getZipcode = (users) => {
    console.log(users.map((user) => user.address.zipcode));
};

getUsers(getZipcode);

const getComments = (callback) => {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((comments) => {
            if (callback) {
                callback(comments);
            }
        });
};

const getCommentsByPostIdIs10 = (comments) => {
    comments
        .filter((comment) => comment.postId === 10)
        .forEach((comment) => console.log(comment.body));
};

// or
// const getCommentsByPostIdIs10 = (comments) => {
//     console.log(comments.filter((comment) => comment.postId === 10));
//     console.log(1);
// };

getComments(getCommentsByPostIdIs10);
