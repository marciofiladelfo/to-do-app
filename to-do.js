let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

//Variável recebe dados armazenados no localStorage, os quais são transformados em array pelo JSON
let todos = JSON.parse(localStorage.getItem("list_todos")) || ["To-do"];

const renderTodos = () => {
  listElement.innerHTML = "";
  for (todo of todos) {
    let liTodo = document.createElement("li");
    let textTodo = document.createTextNode(todo);
    let linkTodo = document.createElement("a");
    let linkTextTodo = document.createTextNode("Excluir");
    linkTodo.setAttribute("class", "excluir");
    linkTodo.setAttribute("href", "#");

    let pos = todos.indexOf(todo); // Utilizado indíce da posição do elemento para efetuar exclusão
    linkTodo.setAttribute("onclick", `delTodo(${pos})`);

    linkTodo.appendChild(linkTextTodo);
    liTodo.appendChild(textTodo);
    liTodo.appendChild(linkTodo);
    listElement.appendChild(liTodo);
  }
};
renderTodos();

const addTodo = () => {
  let textTodo = inputElement.value;

  todos = [...todos, textTodo]; //Usei spread para inserção de elementos no array
  inputElement.value = "";
  renderTodos();
  saveToStorage();
};
buttonElement.addEventListener("click", addTodo);

const delTodo = (pos) => {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
};

const saveToStorage = () => {
  // lista salva no arquivo localStorage transformadas em string pelo JSON
  localStorage.setItem("list_todos", JSON.stringify(todos));
};
