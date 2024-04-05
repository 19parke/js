const postLayout = (() => {
    // service에서 설저한 callback함수, 그 때 전달한 매개변수 posts
    const showPostList = (posts) => {
        const tbody = document.querySelector("table.post-table tbody");
        let text = "";
        posts.forEach((post) => {
            text += `
                <tr>
                    <td>${post.userId}</td>
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                </tr>
            `;
        });

        tbody.innerHTML = text;
    };

    return { showPostList: showPostList };
})();
