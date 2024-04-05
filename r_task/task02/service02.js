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
            callback(posts);
        }
    };
    // 값에 해당하는 getAll 객체?? 함수의 주소값?
    return { getAll: getAll };
})();

// 궁금증
// 모듈이 아니라 getAll이라는 함수만 따로 분리해놓고 파일을 나눌 수는 없는것인가?
