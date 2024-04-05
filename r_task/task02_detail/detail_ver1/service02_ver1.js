const postService = (() => {
    // 정보들을 다 가져올 함수 만들기
    const getAll = async (callback) => {
        // fetch를 이용해서 서버요청하기 , 요청한 값을 받아올 response 만들기
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: `get`,
            }
        );
        // 받아온 response를 바탕으로 posts 객체 배열 만들고 받기
        const posts = await response.json();
        if (callback) {
            return callback(posts);
        }
    };

    // 게시글 추가하기
    // 화면에서 입력한 새 게시글 정보를 post 객체로 한 번에 받는다
    const createPost = async (post, callback) => {
        // 전달받은 새 게시글 정보를 서버에 전달한다.
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "post",
                body: JSON.stringify(post),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            }
        );
        // 추가된 게시글 정보를 createdPost(객체)에 담는다.
        const createdPost = await response.json();
        if (callback) {
            // callback 함수에 추가된 게시글 객체를 전달한다.
            return callback(createdPost);
        }
    };

    // 조회
    // 보통은 service를 먼저 만들고 만든 것 바탕으로 layout만들기
    const read = async (id, callback) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const post = await response.json();
        // console.log(post);
        if (callback) {
            return callback(post);
        }
    };

    // 값에 해당하는 getAll 객체?? 함수의 주소값?
    return { getAll: getAll, createPost: createPost, read: read };
})();

// 궁금증
// 모듈이 아니라 getAll이라는 함수만 따로 분리해놓고 파일을 나눌 수는 없는것인가?
