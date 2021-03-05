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
    dayListItem.originalText = day;
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
// Exercise 2
function createButtonHolidays(string) {
  const buttonHoliday = document.createElement("button");
  buttonHoliday.innerText = string;
  buttonHoliday.id = "btn-holiday";
  const btnsContainer = document.querySelector(".buttons-container");
  btnsContainer.appendChild(buttonHoliday);
  //Exercise 3
  buttonHoliday.addEventListener("click", changeHolidays);
}
createButtonHolidays("Feriados");

function changeHolidays(event) {
  const holidaysList = document.querySelectorAll(".holiday");
  for (let day of holidaysList) {
    if (day.style.backgroundColor === "green") {
      day.style.backgroundColor = "rgb(238,238,238)";
    } else {
      day.style.backgroundColor = "green";
    }
  }
}
// Exercise 4
function createButtonFridays(string) {
  const buttonFriday = document.createElement("button");
  buttonFriday.innerText = string;
  buttonFriday.id = "btn-friday";
  const btnsContainer = document.querySelector(".buttons-container");
  btnsContainer.appendChild(buttonFriday);
  //Exercise 5
  buttonFriday.addEventListener("click", changeFridays);
}
createButtonFridays("Sexta-feira");

function changeFridays() {
  const fridaysList = document.querySelectorAll(".friday");
  for (let day of fridaysList) {
    if (day.innerText === "SEXTOU!") {
      day.innerText = day.originalText;
    } else {
      day.innerText = "SEXTOU!";
    }
  }
}
// Exercício 6
function addEventListenersToDays() {
  const monthDaysList = document.querySelector("#days");
  monthDaysList.addEventListener("mouseover", bigTextSize);
  monthDaysList.addEventListener("mouseout", normalTextSize);
}
addEventListenersToDays();

function bigTextSize(evt) {
  evt.target.style.fontSize = "30px";
}
function normalTextSize(evt) {
  evt.target.style.fontSize = "20px";
}
