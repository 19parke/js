const todoService = (() => {
    const listAll = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );
        const todos = await response.json();
        if (callback) {
            callback(todos);
        }
    };

    const getOneToDo = async (id, callback) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        const todo = await response.json();

        if (callback) {
            callback(todo);
        }
    };

    return { listAll: listAll, getOneToDo: getOneToDo };
})();
