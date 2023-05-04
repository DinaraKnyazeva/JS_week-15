// Создаём приложение «Планировщик задач».
// + В приложении должен быть input для ввода текста задачи и кнопка для её добавления в «Список задач».
// + Ниже должен быть «Список задач» и кнопка «Очистить список».
// - Когда задач нет, должно быть серое уведомление о том, что задачи отсутствуют, а кнопка «Очистить список» должна быть неактивна.
// - При добавлении задачи в список, каждая из них должна появляться в списке задач и напротив иметь неактивный чекбокс, а кнопка «Очистить список» должна быть активна.
// + Каждый чекбокс напротив задачи должен менять своё состояние при клике (говоря нам, что задача выполнена).
// + При клике на кнопку «Очистить список» все задачи должны удаляться.
//выбираю элемент с id="task"
let inputTask = document.getElementById("task");
//выбираю элемент кнопки - очистить список
let buttonClean = document.querySelector(".planner__button-clean");
//выбираю элемент с классом "planner__list" (контейнер для задач)
let plannerListContainer = document.querySelector(".planner__list");

//выбираю элемент с id "open-closed"
let openClosed = document.getElementById("open-closed");

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
  if (plannerListContainer.children.length > 0) {
    openClosed.classList.remove("open");
    openClosed.classList.add("closed");
  } else {
    openClosed.classList.remove("closed");
    openClosed.classList.add("open");
  }
  //добавляю событие: при клике на кнопку "очистить"
  buttonClean.addEventListener("click", () => {
    plannerListContainer.innerHTML = "";
  });
});
// if (plannerListContainer == "") {
//   openClosed.classList.add("open");
// } else {
//   openClosed.classList.add("closed");
// }

// console.log(plannerListContainer);
