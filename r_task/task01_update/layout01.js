const userLayout = (() => {
    const showList = (users) => {
        // const tbody = document.querySelector("table.user-table tbody");
        // let text = "";

        let text = ``;

        // 각 회원별 정보를 추출한다.
        users.forEach((user) => {
            // 회원 1명의 정보를 하나의 tr에 담는다.
            // 각 회원마다 상세보기로 이동할 수 있는 a태그를 만들어준다.
            text += `
                <tr>
                    <td>${user.id}</td>
                    <td><a class="go-detail" href="${user.id}">${user.name}</a></td>
                    <td>${user.address.street}</td>
                    <td>${user.address.suite}</td>
                    <td>${user.address.city}</td>
                    <td>${user.address.zipcode}</td>
                <tr>
            `;
        });
        // 위에서 누적된 회원의 정보를 tbody를 통해 출력해준다. (일괄처리)
        // tbody.innerHTML = text;
        // tbody.innerHTML = newText;
        // showList를 통해 만들어진 text를 tbody라는 객체(dom)를 사용하는 쪽에서 가져오기
        return text;
    };

    const showCreatedUser = (createdUser) => {
        // 새롭게 추가된 회원의 정보(객체)를
        // 화면 형식에 맞는 태그(문자열)로 변경한다.

        return `
            <tr>
                <td>${createdUser.id}</td>
                <td>${createdUser.name}</td>
                <td>${createdUser.street}</td>
                <td>${createdUser.suite}</td>
                <td>${createdUser.city}</td>
                <td>${createdUser.zipcode}</td>
            </tr>
        `;
    };

    const showUser = (user) => {
        // 위의 showCreatedUser와 다른 것 : 다른 화면이다.
        // 실제 서버의 원본 데이터를 가져와서 화면에 뿌려주는 것이기 때문에 user.address가 들어가는 것

        // 서버로부터 받아온 회원 1명정보를
        // 화면 형식에 맞는 태그(문자열)로 변경한다.

        return `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.address.street}</td>
                <td>${user.address.suite}</td>
                <td>${user.address.city}</td>
                <td>${user.address.zipcode}</td>
            </tr>
        `;
    };

    const updateUser = (user) => {
        return `
            <tr>
                <td>${user.id}</td>
                <td><input type="text" value="${user.name}"></td>
                <td><input type="text" value="${user.address.street}"></td>
                <td><input type="text" value="${user.address.suite}"></td>
                <td><input type="text" value="${user.address.city}"></td>
                <td><input type="text" value="${user.address.zipcode}"></td>
            </tr>
        `;
    };

    return {
        showList: showList,
        showCreatedUser: showCreatedUser,
        showUser: showUser,
        updateUser: updateUser,
    };
})();
