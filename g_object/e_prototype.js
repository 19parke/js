// Prototype
// 프로토타입의 프로퍼티에 선언하면, 객체화와 상관 없이 딱 한 번만 만들어진다.
// [ 모든 객체가 공유하는 값 ]이 필요하다면 프로토타입의 프로퍼티로 선언한다.
// 모든 객체가 공유하는 값을 한 번에 관리하고 싶다면, 프로토타입의 프로퍼티로 선언한다.

function Employee(name, income = 0) {
    this.name = name;
    this.income = income;
}

// 모든 객체 공유하는 값이 필요해서 totalIncome 값 추가
Employee.prototype.totalIncome = 0;

gp = new Employee("Grace Park", 100);
dp = new Employee("Daniel Park", 1000);

// 객체로 프로토타입의 프로퍼티를 수정하면, 객체의 프로퍼티에 추가된다.
// 객체로 프로토타입의 프로퍼티를 수정할 수 없다. 단, 사용은 가능하다.
gp.totalIncome = 100;
console.log(gp.totalIncome); //객체의 프로퍼티(프로토타입X)

// 객체에 프로퍼티가 없으면, 프로토타입의 프로퍼티에서 찾는다.
console.log(dp.totalIncome); //프로토타입의 프로퍼티에 접근

// 프로토타입에 프로퍼티를 선언하는 이유는 모든 객체가 공유하기 위함이다.

Employee.prototype.totalIncome += gp.income;
console.log(dp.totalIncome);
Employee.prototype.totalIncome += dp.income;
console.log(dp.totalIncome);
//프로토타입의 프로퍼티를 수정
// dp는 따로 추가되지 않았으므로

// [ 중요 ] Employee.prototype.printInfo = () => {}
// 사용하면 안됨! 모듈에 있는 것을 호출하기 때문에 undefined로 나옴

// 공통 요소를 쉽고 편하게 관리하고자 프로토타입의 프로퍼티에 선언한다.
Employee.prototype.printInfo = function () {
    console.log(`${this.name}\n${this.income} pound`);
};
gp.printInfo();
dp.printInfo();

// 잘못된 사용 예
Employee.prototype.printInfo();

// 내 프로토타입 만들기
function Bungeoppang(type, location) {
    this.type = type;
    this.location = location;
}

a = new Bungeoppang("슈크림", "정자역");
b = new Bungeoppang("팥", "서현역");

Bungeoppang.prototype.machine = "붕어빵 기계";

a.machine = "와플 기계";

console.log(a.machine);
console.log(b.machine);
