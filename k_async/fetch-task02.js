// https://jsonplaceholder.typicode.com/comments

// 통신결과 가져오기
// const getComments = () => {
//     // JavaScript에서 fetch 함수를 사용하여 네트워크 요청을 보낼 때, 이 함수는 Promise 객체를 반환
//     // fetch는 비동기
//     fetch("https://jsonplaceholder.typicode.com/comments")
//         .then((response) =>
//             // response은 여전히 원시 형태, JSON 데이터로 변환하기 위해 response.json()과 같은 메서드를 사용
//             response.json()
//         )
//         // 이 response.json() 메서드도 Promise를 반환하기 때문에, 이를 처리하기 위한 추가적인 then을 사용
//         .then((comments) => console.log(comments));
// };
// // 사용
// getComments();

const getComments = (callback) => {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((comments) => {
            if (callback) {
                callback(comments);
            }
        });
};

const getAllComments = (comments) => {
    console.log(comments.map((comment) => comment.email));
};

getComments(getAllComments);
