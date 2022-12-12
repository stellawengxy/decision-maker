
<<<<<<< HEAD
=======

>>>>>>> 1d24ff884411e69d910237839ccaa28d69c46635
let choicesListLoc = JSON.parse(sessionStorage.getItem("choicesList"));

const tailsValue = choicesListLoc[1];
const headsValue = choicesListLoc[0];

const coin = document.querySelector(".coin");
const flipBtn = document.getElementById("flip-button");
const resetBtn = document.getElementById("reset-button");
const answerBoxP = document.querySelector("#answer-box p");

let tailsChoice = document.querySelector("#tails-count");
let headsBox = document.querySelector("#heads-count");

let randoms = null;

headsBox.innerHTML = headsValue;
tailsChoice.innerHTML = tailsValue;

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
<<<<<<< HEAD
  }, 3100)
=======
  }, 3100);
>>>>>>> 1d24ff884411e69d910237839ccaa28d69c46635
};
