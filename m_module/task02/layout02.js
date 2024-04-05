const postsLayout = (() => {
    const showPostList = (posts) => {
        posts.forEach((post) => {
            console.log(post.title);
        });
    };

    return { showPostList: showPostList };
})();
