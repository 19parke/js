// service02.js 모듈화 후

const postService = (() => {
    const findAll = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "get",
            }
        );
        const posts = await response.json();
        if (callback) {
            callback(posts);
        }
    };

    const create = async (post) => {
        await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "post",
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
        });
    };

    return { findAll: findAll, create: create };
})();
