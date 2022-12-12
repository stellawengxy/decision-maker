// Click to Start Button
const flowerStartBtnEle = document.querySelector("#flowerStartBtn");
const rosePetalsList = document.querySelectorAll(".rose-petals div");
// flowerAnswerBox element
const flowerAnswerBoxInpEle = document.querySelector("#flowerAnswerBox");
// history list
let choicesListLoc = JSON.parse(localStorage.getItem("choicesList"));
let conut = 1;

flowerStartBtnEle.addEventListener("click", () => {
  flowerAnswerBoxInpEle.value = "";
  flowerStartBtnEle.disabled = true;
  if (rosePetalsList.length - 1 === conut) {
    setTimeout(() => {
      let randomNumber = Math.floor(Math.random() * 2);
      flowerAnswerBoxInpEle.value = choicesListLoc[randomNumber];
      flowerStartBtnEle.disabled = false;
    }, 5000);
  }
  if (rosePetalsList[conut]) {
    rosePetalsList[conut].className = "flower_animation";
    conut += 1;
    setTimeout(()=>{
      flowerStartBtnEle.disabled = false;
    },5000)
  }
});
