function timeforToday(datetime) {
    const today = new Date();
    const date = new Date(datetime); //date type으로 변환

    let gap = Math.floor((today.getTime() - date.getTime()) / 1000 / 60); //연산이 가능해짐, 밀리초 단위->초로 만듬,
    // 소수점 버림, 60으로 나누면 1분이 되지 않았다는 뜻 (방금전), 분단위로 나누어준 것

    if (gap < 1) {
        // 1분이 지나지 않았다는 뜻
        return "방금 전";
    }

    if (gap < 60) {
        // 1시간 이내
        return `${gap}분 전`;
    }

    gap = Math.floor(gap / 60); //시간으로 변환
    if (gap < 24) {
        // 하루가 지나지 않았다는 의미
        return `${gap}시간 전`;
    }

    // 26시간 -> 1일 단위
    gap = Math.floor(gap / 24);
    if (gap < 31) {
        // 한 달이 넘지 않았다는 의미
        return `${gap}일 전`;
    }

    gap = Math.floor(gap / 31);
    if (gap < 12) {
        // 1년이 지나지 않았다는 의미
        return `${gap}개월 전`;
    }

    gap = Math.floor(gap / 12);

    return `${gap}년 전`;
}
console.log(timeforToday("2024-02-29T19:13:00"));
// T는 시간, 공백이 생긴다면 멈춥니다.
