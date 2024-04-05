// new : heap 메모리에 할당
// heap : 동적 메모리 할당, 프로그램이 실행되는 동안
// 필요에 따라 메모리를 할당 및 해제
// 프로그램이 실행되는 동안 크기가 변할 수 있는 데이터를 저장
// 명시적으로 해제하지 않는 한 프로그램이 종료될 때까지 유지

// Object() : 객체의 프로퍼티가 들어갈 수 있는 공간을 확보하고 그 주소를 가져와준다.

// dinner의 property(속성)가 들어갈 수 있는 공간 확보
// dinner에는 그 공간의 주소가 들어있다.
let dinner = new Object();
console.log(dinner); // {} 출력
console.log(dinner === null); //false
// dinner 객체가 비어있는 것 뿐 유효한 객체. null은 아니다.
// null은 아무런 값도 없음을 명시적으로 나타냄

// user객체 선언
let user = {
    money: 10000,
};

// property(속성)추가 , 확보된 공간에 들어갈 수 있다.
dinner.name = "피자";
dinner.price = 30000;

// 주소를 전달 받은 뒤,
dinner.pay = (user) => {
    // 직접 주소에 접근해서 값을 수정한다.
    user.money -= dinner.price;
};
// dinner 객체에 pay라는 메서드를 추가한 것
// dinner.pay는 변수라기 보다는 객체의 속성이다.(property)
// 해당 property는(속성) 함수를 값으로 가지며 메서드라고 한다.
// dinner.pay에 할당된 화살표 (익명) 함수

// user객체가 가지고 있는 주소를 전달한다.
/* 
만약 dinner.pay(user)를 적지 않고 
user.money만 찍는다면 dinner.pay(user);
*/
// dinner.pay(user);
console.log(user.money); //10000

dinner.pay(user);
// 해당 '사용문'에서 user는 매개변수로 일을 하고
// dinner.pay함수 내에서 user객체에 접근하기 위함
console.log(user);
