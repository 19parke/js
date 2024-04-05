const postLayout = (() => {
    // service에서 설저한 callback함수, 그 때 전달한 매개변수 posts
    const showPostList = (posts) => {
        let text = ``;
        posts.forEach((post) => {
            text += `
                <tr>
                    <td>${post.userId}</td>
                    <td>${post.id}</td>
                    <td><a class="go-detail" href="${post.id}">${post.title}</a></td>
                    <td>${post.body}</td>
                </tr>
            `;
        });
        return text;
        // tbody.innerHTML = text;
    };

    const showCreatedPost = (createdPost) => {
        // 새롭게 추가된 게시글의 정보(객체)를
        // 화면 형식에 맞는 태그(문자열)로 변경
        return `
            <tr>
                <td>${createdPost.userId}</td>
                <td>${createdPost.id}</td>
                <td>${createdPost.title}</td>
                <td>${createdPost.body}</td>
            </tr>
        `;
    };

    const showPost = (post) => {
        return `
            <tr>
                <td>${post.userId}</td>
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.body}</td>
            </tr>
        `;
    };

    const updatePost = (post) => {
        return `
            <tr>
                <td>${post.userId}</td>
                <td>${post.id}</td>
                <td><input type="text" value="${post.title}"></td>
                <td><input type="text" value="${post.body}"></td>
            </tr>
        `;
    };

    return {
        showPostList: showPostList,
        showCreatedPost: showCreatedPost,
        showPost: showPost,
        updatePost: updatePost,
    };
})();
