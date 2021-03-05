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
// Exercício 1
const daysElement = document.querySelector("#days");
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
for (let day of dezDaysList) {
  let dayElement = document.createElement("li");
  dayElement.className = "day";
  dayElement.innerText = day;
  if (day === 24 || day === 25 || day === 31) {
    dayElement.className += " holiday";
  }
  if (day === 4 || day === 11 || day === 18 || day === 25) {
    dayElement.className += " friday";
  }
  daysElement.appendChild(dayElement);
}
// Exercício 2
function createButton(string) {
  let btnElement = document.createElement("button");
  btnElement.name = string;
  btnElement.id = "btn-holiday";
  let btnsContainerElement = document.querySelector(".buttons-container");
  btnsContainerElement.appendChild(btnElement);
  // part of exercise 3 - The line below uses delegates like described here https://stackoverflow.com/questions/29586046/delegating-a-function-call-in-javascript to pass the caller context for the function addEvent, so it can attach the listener in the correct object, have in mind this is *probably not* what the exercise asked for
  addEventListenerOnClick.call(btnElement);
}
createButton("Feriados");
// Exercício 3
function addEventListenerOnClick() {
  this.addEventListener("click", changeHolydaysColor);
}
function changeHolydaysColor() {
  let holidays = document.querySelectorAll(".holiday");
  for (let day of holidays) {
    if (day.style.backgroundColor === "green") {
      day.style.backgroundColor = "";
    } else {
      day.style.backgroundColor = "green";
    }
  }
}
