// 在本地存储中获取数据

let choicesListLoc = JSON.parse(localStorage.getItem("choicesList"));

const tailsValue = choicesListLoc[1];
const headsValue = choicesListLoc[0];

/* coin page */

/*let heads = 0;
let tails = 0;*/
const coin = document.querySelector(".coin");
const flipBtn = document.getElementById("flip-button");
const resetBtn = document.getElementById("reset-button");
const answerBoxP = document.querySelector("#answer-box p");
/*let headsChoice = document.querySelector("#head-counts");
 */

let tailsChoice = document.querySelector("#tails-count");
let headsBox = document.querySelector("#heads-count");

let randoms = null;
// 初始化数据
headsBox.innerHTML = headsValue;
tailsChoice.innerHTML = tailsValue;

// flipBtn.addEventListener("click", () => {
//   let i = Math.floor(Math.random() * 2);
//   coin.style.animation = "none";
//   if (i) {
//     setTimeout(function () {
//       coin.style.animation = "spin-heads 3s forwards";
//     }, 100);
//     heads++;
//   } else {   setTimeout(function () {
//       coin.style.animation = "spin-tails 3s forwards";
//     }, 100);
//     tails++;
//   }
// });

flipBtn.addEventListener("click", () => {
  answerBoxP.innerHTML = "Answer";
  randoms = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  if (randoms) {
    setTimeout(function () {
      coin.style.animation = "spin-heads 3s forwards";
    }, 100);
  } else {
    setTimeout(function () {
      coin.style.animation = "spin-tails 3s forwards";
    }, 100);
  }
  disableButton();
});

function disableButton() {
  flipBtn.disabled = true;
  setTimeout(function () {
    flipBtn.disabled = false;
    answerBoxP.innerHTML = choicesListLoc[randoms === 0 ? 1 : 0];
  }, 3100);
}
