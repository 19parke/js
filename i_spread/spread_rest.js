// B파일
// const buttonComponent = (styles, texts) => {
// const buttonComponent = ({ color, border, margin }) => {};
//      비구조화 할당
//     const { color, border, margin } = styles;
//     const { normal, hover } = texts;

//     console.log(color, border, margin);
//     console.log(normal, hover);
// };

// A파일
// let styles = {
//     color: "red",
//     border: "1px solid black",
//     margin: "0 auto",
// };

// let texts = {
//     normal: "피자",
//     hover: "[할인] 닭갈비",
// };
// buttonComponent(styles);
// buttonComponent(styles, texts);

// [ 사용예시 1 ]
// B 파일
// productComponent라는 함수 선언 후 상품 정보 받기
// const productComponent = (products) => {
//     // 비구조화 할당
//     const { number, name, price, discount } = products;
//     console.log(number, name, price, discount);
// };

// A 파일
// 상품
// 번호, 상품명, 가격, 할인율
// let product = {
//     number: 1111,
//     name: "SkullCandy Casette Headset",
//     price: 49900,
//     discount: 10,
// };

// productComponent(product);

// [ 사용예시 2 ]

// B 파일

// 단순 정보 출력
// let printProduct = ({ type, location, price, cashDiscount }) => {
//     console.log(type, location, price, cashDiscount);
// };

// // 계산
// let calculate = ({ cashDiscount, ...fishBread }, price) => {
//     // 내가 가져와서 쓸 요소 (discount)만 빼고, 나머지는 묶고 ...fishBread
//     // 새로운 객체 생성, 변경감지
//     return {
//         ...fishBread, //기존 fishBread 값들 풀기(사용, 풀어주기)
//         type: "흑임자", //수정 (새로운 속)
//         crisp: "very crisp", //추가 fishBread.crisp가 쓰기 싫어서 crisp으로만 사용하기 위해 꺼내온것이다.
//         discountPrice: price * (1 - cashDiscount / 100), //추가
//     };
// };
// let fishBread = {
//     type: "팥",
//     location: "2번출구 앞",
//     price: 2000,
//     cashDiscount: 5,
// };

// printProduct(fishBread);
// fishBread = calculate(fishBread, 3000);
// console.log(fishBread);

// 또는
// B파일
// const productComponent = ({ price, ...product }, discount) => {
//     // 내가 가져와서 쓸 것만 빼고 price, 나머지는 묶고 ...product
//     //새로운 객체 생성, 변경 감지
//     return {
//         ...product, //기존 product값들 풀기 (사용, 풀어주기)
//         price: price, //추가 product.price가 쓰기 싫어서 price로만 사용하기 위해 꺼내온것이다.
//         discount: discount, //수정(새로운 할인가 )
//         sellPrice: price * (1 - discount / 100), //추가
//     };
// };

// A파일
// let product = {
//     id: 1,
//     name: "춘천 국물 닭갈비 떡볶이",
//     price: 13200,
//     discount: 15,
// };

// product = productComponent(product, 15);
// console.log(product);
// 이렇게 사용!

// B 파일
// categoryComponent라는 함수 선언 후 카테고리 정보 받기
// 이름을 다른 이름으로 변경해서 리턴하기
// let categoryComponent = ({ name, ...category }) => {
//     return {
//         // 이걸 풀어주지 않으면 name만 리턴된다. 나머지는 없어짐.
//         ...category,
//         name: "spring",
//     };
// };

// A 파일
// 카테고리
// 번호, 이름
// let category = {
//     number: 1,
//     name: "cloths",
// };

// category = categoryComponent(category);
// console.log(category);

// 또는
// const categoryComponent = (category) => {
//     return { ...category, name:"autumn" };
// };

// 카테고리가 여러개 일때
// B 파일
// 몇 개 전달 받을지 모르니 ...categories로 받는다.
// const categoryComponent = (...categories) => {
// const [category1, ...rest] = categories;
// 문법에 대한 설명 : 비구조화 배열 할당 문법 그래서 가능(변수명 없어도 됨)
// 그리고 const는 배열이나 객체가 상수로 선언되는 것이지,
// 그 안의 내용이 불변하는 것은 아니다.
//     console.log(category1);

//     for (let category of rest) {
//         console.log(category);
//     }
// };

// A파일
// globalThis.id = 0;

// function Category(name) {
//     this.id = ++id;
//     this.name = name;
// }
// let categories = [
//     new Category("TOP100"),
//     new Category("인기급상승"),
//     new Category("직원추천상품"),
//     new Category("신상품"),
// ];

// categoryComponent(categories);
// 원래는 여러개를 전달해줘야 하는데 (몇개를 전달 받을지 모른다는 가정에 ...category를 해줬으니)
// categories를 통으로 하나로 전달 했다
// 즉, 저 4개의 카테고리를 배열 첫번째 자리에 통으로 다 넣은 것이다.
// 그래서 사용할거면 풀어서 써줘야 한다.
// 이렇게
// categoryComponent(...categories);
// 여기서 ...풀어서 전달한다는 의미

// [ 내 예시 ]
// B파일
let totalMenu = (...menus) => {
    const [menu1, ...rest] = menus;
    console.log(menu1); //처음으로 들어오는 메뉴명 출력
    // 나머지 메뉴명들 출력
    for (let menu of rest) {
        console.log(menu);
    }
};

// A파일
globalThis.num = 0;
function Menu(name) {
    this.num = ++num;
    this.name = name;
}
let menus = [
    new Menu("시험접수"),
    new Menu("접수확인/변경/취소"),
    new Menu("시험일정"),
    new Menu("시험센터 안내"),
    new Menu("TOEIC Plaza 안내"),
];
totalMenu(...menus);
