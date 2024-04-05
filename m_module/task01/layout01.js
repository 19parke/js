const usersLayout = (() => {
    // showList는 service01.js의 findAll에서 정의한 callback함수
    const showList = (users) => {
        users.forEach((user) => {
            console.log(user.name);
        });
    };

    return { showList: showList };
})();
