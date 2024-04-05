// 게시글
const postService = (() => {
    // 게시글 작성
    // 첨부파일
    // 게시글을 작성할 때 제목, 내용, 첨부파일을 넣을 수 있는 항목 전달
    const write = ({ title, content, ...file }) => {};

    // 게시글 목록
    // 목록이 여러 개 있으면 page로 구분되는데
    // page에 해당되는 게시글들을 가져와야 하므로 page number전달
    const getList = (page) => {};

    // 게시글 조회
    // 게시글 마다 id가 있다. 클릭한 게시글의 id값 전달해야 화면에 게시글 내용 뿌리기 가능
    const select = (id) => {};

    // 게시글 수정
    // 조회하고 나서 수정이 가능하기 때문에 신규 정보에 해당하는 post를 받아온다.
    const update = (post) => {};

    // 게시글 삭제
    const remove = (id) => {};

    return {
        write: write,
        getList: getList,
        selec: select,
        update: update,
        remove: remove,
    };
})();
