// 내 모듈화 만들기
// 모듈화의 큰 틀 기억하기 : 선언과 동시에 사용!
// const module = (function ()=>{})();
const emailService = (() => {
    // 이메일 작성하기
    const writeEmail = ({ sender, title, body, ...file }) => {
        console.log(sender, title, body, file);
    };

    // 나에게 이메일 작성하기
    const writeEmailMe = ({ title, body }, file) => {
        console.log(title, body, file);
    };

    // 이메일 페이지
    const emailPage = (page) => {};

    return {
        writeEmail: writeEmail,
        writeEmailMe: writeEmailMe,
        emailPage: emailPage,
    };
})();

const file = {
    name: "File Name",
    type: "file",
};

const email = {
    sender: "sender",
    title: "This is title",
    body: "This is body",
    file: file,
};

emailService.writeEmail(email);
// 옳지 않은 사용법! 구조 분해 할당을 사용하여 매개변수를 받고 있지만
// 개별 매개 변수로 전달하고 있음
// emailService.writeEmailMe(email.title, email.body, file);
emailService.writeEmailMe(email, file.name);
