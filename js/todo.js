const toDoForm = document.querySelector(".toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".toDoList");

const TODOS_KEY = "todos";

let toDos = []; //array가 덮어씌워지는 것이 아니라 추가가 되어야 함

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// todo 삭제하기
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}
//li 생성
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  //li 내부에 span 추가
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// localStorage 에서 todo 불러오기
function loadToDos() {
  const toDosLoaded = localStorage.getItem(TODOS_KEY);
  if (toDosLoaded !== null) {
    const parsedToDos = JSON.parse(toDosLoaded);
    parsedToDos.forEach(function (toDos) {
      paintToDo(toDos.text);
    });
  }
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //input의 현재 value를 새로운 변수에 복사
  toDoForm.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); //localStorage 저장 -> newTodo를 toDos array에 push
  paintToDo(newTodoObj); //입력값 호출 -> 화면에 toDo 그려줌
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
  console.log("this is the turn of", item);
}

//toDos 모두 가져오기
//단순한 string을 살아있는 array로 변환
const savedToDos = localStorage.getItem(TODOS_KEY);

//forEach함수는 이 paintToDo를 parsedToDos 배열의 요소마다 실행함
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleToDoSubmit);
}

init();
