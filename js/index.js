const birthday = document.querySelector("#birthday");
const luckyNum = document.querySelector("#lucky");
const calculate = document.querySelector("#calculate");

function LuckCalculator() {
  let date = birthday.value;
  let birthSum = date
    .replaceAll("-", "")
    .split("")
    .map((element) => Number(element))
    .reduce((sum, element) => sum + element);
  console.log(birthSum);
  let luckyNumber = luckyNum.value;
  if (birthSum / luckyNumber === 0) {} else {}
}

calculate.addEventListener("click", LuckCalculator);