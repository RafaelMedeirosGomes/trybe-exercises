function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercise 1
function createDaysOfTheMonth() {
  const dezDaysList = [
    29,
    30,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];
  const monthDaysList = document.querySelector("#days");
  for (let day of dezDaysList) {
    let dayListItem = document.createElement("li");
    dayListItem.className = "day";
    dayListItem.innerText = day;
    if (day === 24 || day === 25 || day === 31) {
      dayListItem.className += " holiday";
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayListItem.className += " friday";
    }
    monthDaysList.appendChild(dayListItem);
  }
}
createDaysOfTheMonth();
// Exercício 2
function createButtonHolidays(string) {
  let btnElement = document.createElement("button");
  btnElement.name = string;
  btnElement.id = "btn-holiday";
  let btnsContainerElement = document.querySelector(".buttons-container");
  btnsContainerElement.appendChild(btnElement);
  // The line below is part of Exercese 3 - it uses delegates like described here https://stackoverflow.com/questions/29586046/delegating-a-function-call-in-javascript to pass the caller context to the function addEvent, so it can attach the listener in the correct object, have in mind this is *probably not* what the exercise asked for
  addEventListenerOnClickChangeHolidaysColor.call(btnElement);
}
createButtonHolidays("Feriados");
// Exercício 3
function addEventListenerOnClickChangeHolidaysColor() {
  this.addEventListener("click", changeHolidays);
}
function changeHolidays() {
  let holidays = document.querySelectorAll(".holiday");
  for (let day of holidays) {
    if (day.style.backgroundColor === "green") {
      day.style.backgroundColor = "";
    } else {
      day.style.backgroundColor = "green";
    }
  }
}
// Exercício 4
function createButtonFridays(string) {
  let btnElement = document.createElement("button");
  btnElement.name = string;
  btnElement.id = "btn-friday";
  let btnsContainerElement = document.querySelector(".buttons-container");
  btnsContainerElement.appendChild(btnElement);
  // Line below is from exercise 5
  addEventListenerOnClickChangeFridaysColor.call(btnElement);
}
createButtonFridays("Sexta-feira");
// Exercício 5
function addEventListenerOnClickChangeFridaysColor() {
  this.addEventListener("click", changeFridays);
}
function changeFridays() {
  let ul = document.querySelector("#days");
  let days = ul.children;
  for (let index in days) {
    if (days[index].className.includes("friday")) {
      if (days[index].innerText === "SEXTOU!") {
        // Disgusting hack that only works given this exactly same dezDaysList
        days[index].innerText = index - 1;
      } else {
        days[index].innerText = "SEXTOU!";
      }
    }
  }
}
// Exercício 6
