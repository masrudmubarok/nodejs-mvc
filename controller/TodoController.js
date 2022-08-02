const TodoModel = require('../model/TodoModel');
const TodoView = require('../view/TodoView');

class TodoController {

    static show() {
        let todos = TodoModel.show();
        TodoView.show(todos);
    }

    static add(todo) {
        TodoModel.add(todo);
    }

    static update(todo) {
        TodoModel.update(todo);
    }

    static delete(todo) {
        TodoModel.delete(todo);
    }

    static message(msg) {
        TodoView.message(msg);
    }

}

module.exports = TodoController;