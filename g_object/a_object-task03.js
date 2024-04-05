// 게시글 - 대카테고리
// 번호, 제목, 내용

let post = {
    num: 1,
    title: "writing",
    content: "hello javascript",
};

// 후기 - 소카테고리
// 번호, 내용, 별점(0~5)
let review = {
    id: 101,
    content: "this is hard",
    stars: 3,
    category: post,
};

console.log(review.category.content);
console.log(review.content);
