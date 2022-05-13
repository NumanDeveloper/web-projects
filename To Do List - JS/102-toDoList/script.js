// 1. create an array to store todos
// 2. take input for todo
// 3. check if to show list or to add another item
// 4. delete if user enter delete


var todos = ["walk"];
// var input = prompt("What would you like to do?");

// will keep asking for input until user press "quit"
while (input !== "quit") {
    // handle input
    // if user enter list
    if (input === "list") {
        listTodo();
    }
    // if user enter new
    else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    // ask again for new input
    let input = prompt("What would you like to do?");
} // while loop ends here
console.log("OK! YOU QUIT THE APP");


// defining functions outside
function listTodo() {
    console.log("**********");
    todos.forEach(function(todo, i) {
        console.log(i + ": " + todo);
    });
    console.log("**********");
}

function addTodo() {
    let newTodo = prompt("Enter new todo");
    // adding item to the array
    todos.push(newTodo);
    console.log("Todo Added!");let
}

function deleteTodo() {
    // ask index for deletion
    let index = prompt("Enter index to delete the todo");
    // delete the element
    // will use splice method that deletes elements from within the array
    todos.splice(index, 1); // 1 tells to delete only one element
    console.log("Todo Deleted!");
}