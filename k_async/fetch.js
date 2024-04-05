// URL : 경로
// URI : URL에서 IP와 포트번호를 제외한 나머지

// fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
//     response.json().then((post) => {
//         console.log(post.title);
//     });
// });

// 데이터가 담겨져 있는 이 링크에서 정보를 가져와줘
fetch("https://jsonplaceholder.typicode.com/posts/1")
    // 가져오 정보 response
    .then((response) => response.json())
    // 그 정보들 중에서 게시글의 제목을 뿌려줘
    .then((post) => {
        console.log(post.title);
    });
