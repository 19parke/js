// 회원
// 회원번호, 아이디, 주소1, 주소2, 주소3

let user = {
    userNum: 1111,
    userid: "1234",
    address1: "경기도",
    address2: "성남시",
    address3: "분당구",
};

// 상품
// 상품번호, 상품명, 상품 가격, 상품을 구매한 회원

let product = {
    number: 1,
    "product-name": "Pants",
    price: 1000,
    buyer: user,

    // [ 메소드와 함수의 차이 ]

    // 메소드는 영역 안에서 선언된다.

    // 함수는 영역 안에 있지 않고 밖에 선언된다.

    // printAddress 메소드 (product라는 영역안에 있으니)
    printAddress: () => {
        for (let i = 0; i < 3; i++) {
            console.log(product.buyer[`address${i + 1}`]);
        }
    },
};

// 수정: 기존에 있는 key값에 새로운 값을 넣는다.
product["product-name"] = "Cardigan";
product.price = 30000;

// 추가: 기존에 없는 key값에 값을 넣는다.
product.printInfo = () => {
    console.log(product.number, product.price, product["product-name"]);
};

// 상품 전체 정보를 출력하고, 회원의 정보는 주소만 출력한다.
product.printInfo();
product.printAddress();
