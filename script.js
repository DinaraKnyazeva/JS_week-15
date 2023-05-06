//выбираю элемент с id="task"
let inputTask = document.getElementById("task");
//выбираю элемент кнопки - очистить список
let buttonClean = document.querySelector(".planner__button-clean");
//выбираю элемент с классом "planner__list" (контейнер для задач)
let plannerListContainer = document.querySelector(".planner__list");
//выбираю элемент с id "open-closed"
let openClosed = document.getElementById("open-closed");

// Функция, которая обновляет состояние уведомления о списке задач и кнопки "Очистить список"
function upDateTaskListStatus() {
  if (plannerListContainer.children.length > 0) {
    //если добавлены задачи (длина дочерних элементов let plannerListContainer больше 0), то добавляем класс "closed", а "open" удаляем и наоборот
    openClosed.classList.remove("open");
    openClosed.classList.add("closed");
    buttonClean.disabled = false;
  } else {
    openClosed.classList.remove("closed");
    openClosed.classList.add("open");
    buttonClean.disabled = true;
  }
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); //отменяем стандартное поведение браузера

  //создаю новый элемент "div"
  let listItem = document.createElement("div");
  //присваиваю класс элементу "div"
  listItem.classList.add("planner__item");
  let elementItem = inputTask.value;
  //заполняю див элементами
  listItem.innerHTML = `
  <span class="planner__task">${elementItem}</span>
  <input class="planner__check" type="checkbox" />`;
  //к родительскому добавляю каждый элемент
  plannerListContainer.appendChild(listItem);
  //очищаю значения инпутов
  inputTask.value = "";
  upDateTaskListStatus();
  //добавляю событие: при клике на кнопку "очистить"
  buttonClean.addEventListener("click", () => {
    plannerListContainer.innerHTML = "";
    upDateTaskListStatus();
  });
});
upDateTaskListStatus();
