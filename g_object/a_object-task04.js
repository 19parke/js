// 회원 - 대카테고리
// 번호, 이름

// 프로필 사진 - 소카테고리
// 번호, 경로(2024/02/13/a.png)

let user = {
    num: 1,
    name: "Grace",
};

let profilePhoto = {
    num: 101, //다른 객체에서 같은 속성 이름 사용 가능
    path: "2024/02/13/a.png",
    bigCat: user,
};

console.log(profilePhoto.bigCat);
console.log(profilePhoto.bigCat.name);
console.log(profilePhoto.num);
console.log(profilePhoto.bigCat.num);
const fullPath = `upload/${profilePhoto.path}`;
console.log(fullPath);
