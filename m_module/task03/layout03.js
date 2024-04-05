const layoutService = (() => {
    const listLayout = (todos) => {
        todos.forEach((todo) =>
            console.log(`${todo.title} : ${todo.completed}`)
        );
    };

    const todoLayout = (todo) => {
        console.log(
            `User ID : ${todo.userId}\n ID : ${todo.id}\n Title : ${todo.title}\n Completed ? ${todo.completed}`
        );
    };

    return { listLayout: listLayout, todoLayout: todoLayout };
})();
