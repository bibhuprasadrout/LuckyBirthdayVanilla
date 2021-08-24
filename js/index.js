const birthday = document.querySelector("#birthday");
const luckyNum = document.querySelector("#lucky");
const calculate = document.querySelector("#calculate");
const reset = document.querySelector("#reset");

function LuckCalculator() {
  let date = birthday.value;
  let birthSum = date
    .replaceAll("-", "")
    .split("")
    .map((element) => Number(element))
    .reduce((sum, element) => sum + element);
  let luckyNumber = luckyNum.value;
  if (birthSum % luckyNumber === 0) {
    document.querySelector('.message').classList.remove('hidden')
    document.querySelector('.message').classList.add('visible')
    document.querySelector('.message').innerText = 'Your birthday is lucky, you can have a vanilla.'
  } else {
    document.querySelector('.message').classList.remove('hidden')
    document.querySelector('.message').classList.add('visible')
    document.querySelector('.message').innerText = 'Your birthday is lucky, may be next time you can have a vanilla.'
  }
}

calculate.addEventListener("click", () => {
  if(birthday.value && luckyNum.value) {
    LuckCalculator()
  } else {
    document.querySelector('.message').classList.remove('hidden')
    document.querySelector('.message').classList.add('visible')
    document.querySelector('.message').innerText = 'Please enter valid inputs.'
  }
});

reset.addEventListener("click", () => {
  document.querySelector('.message').classList.remove('visible')
  document.querySelector('.message').classList.add('hidden')
});