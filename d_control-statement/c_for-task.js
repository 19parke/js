//  시작 인덱스 (i) 값은 0으로 설정한다.
// 1~100까지 출력

for (i = 0; i < 100; i++) {
    console.log(i + 1);
}

// 100~1까지 출력
for (i = 0; i < 100; i++) {
    console.log(100 - i);
}

// 1~100까지 중 짝수만 출력

for (i = 0; i < 100; i++) {
    if ((i + 1) % 2 == 0) {
        console.log(i + 1);
    }
}

//////////중요/////////////
//0~49를
//1~50
//2~100

for (i = 0; i < 50; i++) {
    console.log((i + 1) * 2);
}

// 1~count까지 합 출력
let count = 100;
let total = 0;
for (i = 0; i < count; i++) {
    total += i + 1;
}
console.log(total);

// 01234 01234 01234 출력
let result = "";
for (let i = 0; i < 15; i++) {
    result += `${i % 5} `;
}
console.log(result);

// 1~10까지 중 5 제외하고 출력
for (let i = 0; i < 9; i++) {
    console.log(i + 1 < 5 ? i + 1 : i + 2);
}

//aBcDeFg...Z출력 (홀짝)

// break : 즉시 영역 탈출
// 1~10까지 중 5까지만 출력
for (let i = 0; i < 10; i++) {
    console.log(i + 1);
    if (i == 4) {
        break;
    }
}

// continue : 다음 반복으로 넘어가기 , 아래 있는 코드를 실행하고 싶지 않을 때
// 1~10까지 5를 제외하고 출력
for (let i = 0; i < 10; i++) {
    if (i == 4) {
        continue;
    }
    console.log(i + 1);
}
