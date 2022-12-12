
const flowerStartBtnEle = document.querySelector("#flowerStartBtn");
const rosePetalsList = document.querySelectorAll(".rose-petals div");

const flowerAnswerBoxInpEle = document.querySelector("#flowerAnswerBox");
<<<<<<< HEAD
// history list
=======

>>>>>>> 1d24ff884411e69d910237839ccaa28d69c46635
let choicesListLoc = JSON.parse(sessionStorage.getItem("choicesList"));
let conut = 1;

flowerStartBtnEle.addEventListener("click", () => {
  flowerAnswerBoxInpEle.value = "";
  flowerStartBtnEle.disabled = true;
  if (rosePetalsList.length - 1 === conut) {
    setTimeout(() => {
      let randomNumber = Math.floor(Math.random() * 2);
      flowerAnswerBoxInpEle.value = choicesListLoc[randomNumber];
      flowerStartBtnEle.disabled = true;
    }, 3000);
  }
  if (rosePetalsList[conut]) {
    rosePetalsList[conut].className = "flower_animation";
    conut += 1;
    setTimeout(()=>{
      flowerStartBtnEle.disabled = false;
    },3000)
  }
});

