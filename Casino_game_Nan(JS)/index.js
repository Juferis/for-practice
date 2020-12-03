// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const body = document.querySelector("body");
const form = document.querySelector("form");
const rangeInput = form.querySelector(".range_number");
const number = body.querySelector("#number");
const submitRange = form.querySelector(".guess_submit");
const button = form.querySelector(".guess_btn");
const resultTitle = body.querySelector(".result-title");
const resultText = body.querySelector(".result-title__text");

function getRandomNumber(number) {
  //랜덤 숫자를 생성해서 소수점 자리는 버리기
  const getNum = Math.random() * number;
  const randomNum = Math.floor(getNum);
  return randomNum;
}
function playGame() {
  const myNum = parseInt(submitRange.value); //여기서 숫자형으로 변환해줘야 NaN이 안뜬다
  const rangeValue = rangeInput.value;
  const comNum = getRandomNumber(rangeValue);
  resultTitle.innerText = `You choose: ${myNum}, the machine chose: ${comNum}`;
  if (myNum === comNum) {
    resultText.innerText = "You Won!";
  } else {
    resultText.innerText = "You Loose! lol";
  }
}
function loadRange() {
  const rangeValue = rangeInput.value;
  number.innerText = rangeValue;
}
function init() {
  rangeInput.addEventListener("input", loadRange);
  button.addEventListener("click", playGame);
}
init();
