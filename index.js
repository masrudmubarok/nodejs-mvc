// Proses ARGV : bisa mengambil input dari terminal
// Command : show, add, update, delete
// Include process module
const process = require('process');
const command = process.argv[2];
const params = process.argv.slice(3);
const TodoController = require('./controller/TodoController');

// console.log(command);
// console.log(params);

switch(command) {
    case 'show':
        // console.log("Command show");
        TodoController.show();
        break;
    case 'add':
        // console.log("Command add");
        TodoController.add(params);
        break;
    case 'update':
        // console.log("Command update");
        TodoController.update(params);
        break;
    case 'delete':
        // console.log("Command delete");
        TodoController.delete(params);
        break;
    default :
        // console.log("Masukkan command!");
        TodoController.message("Masukkan command!");
        break;
}