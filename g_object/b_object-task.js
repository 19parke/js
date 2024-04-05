// 회원 - 대카테고리
// 번호, 이름
let user = {
    id: 101,
    name: "Grace",
};

// 게시글 - 중카테고리
// 번호, 제목, 내용
let post = {
    num: 1,
    title: "Hello Javascript",
    content: "Nice to meet you",
    user: user,
};

// 좋아요 - 소카테고리
// 안에 대카테고리 , 중카테고리 모두 포함해야함
//  번호
let likes = {
    num: 3,
    user: user,
    post: post,
};

// 객체 속성 추가
user.number = 1;
// 객체 속성 변경
user.name = "Park";
console.log(likes.post.user.name);
console.log(likes.user.number);

// 중고차 시장에서 다음과 같은 데이터가 필요하다.
// 자동차
let car = {
    brand: "Range Rover",
    id: 12345,
};

/*
[ IF ]
let registration = {
    regisNum: 1111,
    car: car,
    owner: owner,
};
이런 순서대로 정의 한다면 Uncaught Reference Error 발생
코드의 재배치 필요 , registration객체를 생성할 때 참조할 수 있는
owner값이 아직 초기화 되지 않았기 때문
==> Javascript는 코드를 위에서 아래로 순차적으로 실행
*/

// 차주
let owner = {
    name: "Grace Park",
};

// 등록증
let registration = {
    regisNum: 1111,
    car: car,
    owner: owner,
};
// 다 대 다 이지만 다 대 1, 1 대 다 로 풀어써야 한다.
// 그래서 등록증 객체를 중간에 두고 풀어야 한다.
// ==> 예를 들어 차주 1명 등록증 여러개
// ==>자동차 한개에 등록증 여러개

// 뉴스 스탠다드 - 대카테고리
let news = {
    name: "News Standard",
};
// 방송사들 - 중카테고리
let broadcast = {
    b1: "SBS",
    b2: "KBS",
    b3: "MBC",
    news: news,
};
// 주제 - 소카테고리
let topic = {
    topic1: "entertainment",
    topic2: "sports",
    topic3: "economy",
    news: news,
    broadcast: broadcast,
};
console.log(topic.topic2);
console.log(topic.broadcast.b2);
console.log(topic.broadcast.news.name);
