/*
    if문

    if(조건식){

    }
    // 위의 조건식 결과에 상관 없이 무조건 검사
    if(조건식){

    }
    ...


    if(조건식){
        실행할 문장;
    }
    //위의 조건식이 true가 아니면 검사한다.
    else if(조건식){
        실행할 문장;
    }else if(조건식){
        실행할 문장;
    }
    ...
    }else {
        실행할 문장;
    }



*/

// 두 정수의 대소비교
let firstNumber = 10;
let lastNumber = 20;

if (firstNumber > lastNumber) {
    console.log(`${firstNumber}가 더 큰 값`);
} else if (firstNumber !== lastNumber) {
    console.log(`${lastNumber}가 더 큰 값`);
} else {
    console.log(`두 수가 같다.`);
}
