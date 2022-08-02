class TodoView {

    static show(todos) {
        // console.log(todos);
        console.log("Todo List");
        todos.forEach(element => {
            const {id, task, status} = element;
            if (status) {
                console.log(`${id}. [x] ${task}`);
            } else {
                console.log(`${id}. [ ] ${task}`);
            }
        });
    }

    static message(msg) {
        console.log(msg);
    }

}

module.exports = TodoView;