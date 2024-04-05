// 통신의 역할만 수행!
const postService = (() => {
    // 전체 조회
    const getAll = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await response.json();

        if (callback) {
            callback(posts);
        }
    };

    // 단일 조회
    const getPostById = async (id, callback) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const post = await response.json();
        if (callback) {
            callback(post);
        }
    };

    return { getAll: getAll, getPostById: getPostById };
})();
postService.getAll(console.log);
postService.getPostById(3, console.log);
