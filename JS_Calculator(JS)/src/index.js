// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const body = document.querySelector("body");
const form = body.querySelector("form");
const numInput = form.querySelector("input");
const span = form.querySelector(".number");

const cal0 = form.querySelector(".cal-0"),
  cal1 = form.querySelector(".cal-1"),
  cal2 = form.querySelector(".cal-2"),
  cal3 = form.querySelector(".cal-3"),
  cal4 = form.querySelector(".cal-4"),
  cal5 = form.querySelector(".cal-5"),
  cal6 = form.querySelector(".cal-6"),
  cal7 = form.querySelector(".cal-7"),
  cal8 = form.querySelector(".cal-8"),
  cal9 = form.querySelector(".cal-9");

const resetBtn = form.querySelector(".cal__reset"),
  calPlus = form.querySelector(".cal_plus"),
  calMinus = form.querySelector(".cal_minus"),
  calMult = form.querySelector(".cal_mult"),
  calDivison = form.querySelector(".cal_divison"),
  calQquals = form.querySelector(".cal_equals");

let firstNumArr = [];
let secondNumArr = [];
const FIRST_NUM_LS = "firstNumber";
const SECOND_NUM_LS = "secondNumber";

function saveNumValue(numValue) {
  firstNumArr = numValue;
  secondNumArr = [];
  localStorage.setItem(FIRST_NUM_LS, numValue);
  span.innerText = numValue;
}
function showMeValue(event) {
  event.preventDefault();
  const getFirstNum = localStorage.getItem(FIRST_NUM_LS);
  const getSecondNum = localStorage.getItem(SECOND_NUM_LS);
  const firstNum = parseFloat(getFirstNum);
  const secondNum = parseFloat(getSecondNum);
  if (calPlus.classList.contains("on")) {
    const numValue = firstNum + secondNum;
    calPlus.classList.remove("on");
    saveNumValue(numValue);
  } else if (calMinus.classList.contains("on")) {
    const numValue = firstNum - secondNum;
    calMinus.classList.remove("on");
    saveNumValue(numValue);
  } else if (calMult.classList.contains("on")) {
    const numValue = firstNum * secondNum;
    calMult.classList.remove("on");
    saveNumValue(numValue);
  } else if (calDivison.classList.contains("on")) {
    const numValue = firstNum / secondNum;
    calDivison.classList.remove("on");
    saveNumValue(numValue);
  }
}
function calculatorDivision(event) {
  event.preventDefault();
  firstNumArr = "toggle";
  calDivison.classList.add("on");
  calPlus.classList.remove("on");
  calMinus.classList.remove("on");
  calMult.classList.remove("on");
}
function calculatorMult(event) {
  event.preventDefault();
  const getFirstNum = localStorage.getItem(FIRST_NUM_LS);
  const getSecondNum = localStorage.getItem(SECOND_NUM_LS);
  const firstNum = parseFloat(getFirstNum);
  const secondNum = parseFloat(getSecondNum);
  if (firstNum % 2 === 0 && secondNum === 2) {
    const twoTwo = firstNum * secondNum;
    span.innerText = twoTwo;
    localStorage.setItem(FIRST_NUM_LS, twoTwo);
    secondNumArr = [];
  } else {
    firstNumArr = "toggle";
    calMult.classList.add("on");
    calPlus.classList.remove("on");
    calMinus.classList.remove("on");
    calDivison.classList.remove("on");
  }
}
function calculatorMinus(event) {
  event.preventDefault();
  firstNumArr = "toggle";
  calMinus.classList.add("on");
  calPlus.classList.remove("on");
  calMult.classList.remove("on");
  calDivison.classList.remove("on");
}
function calculatorPlus(event) {
  event.preventDefault();
  firstNumArr = "toggle";
  calPlus.classList.add("on");
  calMinus.classList.remove("on");
  calMult.classList.remove("on");
  calDivison.classList.remove("on");
}
function resetButton() {
  localStorage.removeItem(FIRST_NUM_LS);
  localStorage.removeItem(SECOND_NUM_LS);
}
function saveSecondNumber(secondNum) {
  localStorage.setItem(SECOND_NUM_LS, secondNum);
}
function saveFirstNumber(firstNum) {
  localStorage.setItem(FIRST_NUM_LS, firstNum);
}
function calculatorInput(event) {
  event.preventDefault();
  if (firstNumArr !== "toggle") {
    const number = event.target.value;
    firstNumArr.push(number);
    const firstNum = firstNumArr.join("");
    span.innerText = firstNum;
    saveFirstNumber(firstNum);
  } else if (firstNumArr === "toggle") {
    const number = event.target.value;
    secondNumArr.push(number);
    const secondNum = secondNumArr.join("");
    span.innerText = secondNum;
    saveSecondNumber(secondNum);
  }
}
function init() {
  resetBtn.addEventListener("click", resetButton);
  cal0.addEventListener("click", calculatorInput);
  cal1.addEventListener("click", calculatorInput);
  cal2.addEventListener("click", calculatorInput);
  cal3.addEventListener("click", calculatorInput);
  cal4.addEventListener("click", calculatorInput);
  cal5.addEventListener("click", calculatorInput);
  cal6.addEventListener("click", calculatorInput);
  cal7.addEventListener("click", calculatorInput);
  cal8.addEventListener("click", calculatorInput);
  cal9.addEventListener("click", calculatorInput);
  calPlus.addEventListener("click", calculatorPlus);
  calMinus.addEventListener("click", calculatorMinus);
  calMult.addEventListener("click", calculatorMult);
  calDivison.addEventListener("click", calculatorDivision);
  calQquals.addEventListener("click", showMeValue);
}
init();
