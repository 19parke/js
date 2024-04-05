// 생성자 : 객체를 생성하고 초기화한다.

// 함수로 선언하되, 함수라 부르지 않고 생성자라고 부른다.
// 생성자는 [리턴값이 정해져] 있기 때문에 선언 시 리턴을 사용할 수 없다.
// 따라서 함수라고 부를 수 없다.
// 형식 : [앞글자를 대문자]로 작성한 뒤 [함수를 선언]하면, 이를 생성자로 판단한다.
// 할당한 공간의 주소값을 리턴한다.

// 초기화를 하고자 하면, 매개변수로 초기값을 받을 수 있다.
function Card(name, user, cvc = "000") {
    //함수 같이 생겼지만 대문자로 시작 : 생성자
    // 접근한 객체가 갖고 있는 주소가 this에 자동으로 담긴다.
    // this를 사용하여 객체의 속성과 메서드를 정의, 생성될 객체를 가리키는 참조
    this.name = name;
    this.cvc = cvc;
    this.user = user;
    this.getHistory = () => {
        console.log(this.name + "은행 결제 목록");
        // name만 쓰면 어떤 객체의 주소값인지 모른다.
        // 그 name이 어떤 주소에 들어가 있는지 알아야 한다.
        // getHistory를 호출한 객체의 주소
    };
}

/*let card = {} 하며 일일히 객체를 생성할 필요가 없다 */
// 생성자는 하나의 틀이고
// 생성자를 이용하여 객체를 찍어낸다
a = new Card();
b = new Card();

a.name = "신한";
b.name = "국민";

a.getHistory();
b.getHistory();

// 객체화를 할 때 마다 새로운 공간이 할당되고, 객체마다 주소값은 다르다

let user = {
    name: "박은혜",
    age: 20,
    address: "경기도",
    introduce: () => {
        console.log("Hey!😍");
    },
    // card1: shinhan,
    // card2: kookmin,
};

// 객체는 보통 const로 사용, 안 써도 됨
const shinhan = new Card("신한", user);
kookmin = new Card("국민", user, "123");

console.log(typeof shinhan);
console.log(kookmin.user);

// shinhan.user = user;
// kookmin.user = user;

console.log(this === global);
// global : 전역 객체를 의미, 코드 어디에서나 접근할 수 있는 변수나 함수

// 내 생성자 만들기
function Bungeoppang(type, location) {
    this.type = type;
    this.location = location;
    this.explanation = () => {
        console.log(`${this.type} 붕어빵은 ${this.location}에 있습니다.`);
    };
}

// 붕어빵 a만들기
A = new Bungeoppang();

// 붕어빵 B만들기
B = new Bungeoppang("팥", "육교앞");

A.type = "슈크림";

A.explanation();
B.explanation();
