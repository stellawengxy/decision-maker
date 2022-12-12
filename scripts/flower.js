// Click to Start Button
const flowerStartBtnEle = document.querySelector("#flowerStartBtn");
const rosePetalsList = document.querySelectorAll(".rose-petals div");
// flowerAnswerBox element
const flowerAnswerBoxInpEle = document.querySelector("#flowerAnswerBox");
// history list
<<<<<<< HEAD
let choicesListLoc = JSON.parse(sessionStorage.getItem("choicesList"));
=======
let choicesListLoc = JSON.parse(localStorage.getItem("choicesList"));
>>>>>>> a3e61b94312127d033c016aae2a9d44306689b1a
let conut = 1;

flowerStartBtnEle.addEventListener("click", () => {
  flowerAnswerBoxInpEle.value = "";
  flowerStartBtnEle.disabled = true;
  if (rosePetalsList.length - 1 === conut) {
    setTimeout(() => {
      let randomNumber = Math.floor(Math.random() * 2);
      flowerAnswerBoxInpEle.value = choicesListLoc[randomNumber];
<<<<<<< HEAD
      flowerStartBtnEle.disabled = true;
    }, 3000);
=======
      flowerStartBtnEle.disabled = false;
    }, 5000);
>>>>>>> a3e61b94312127d033c016aae2a9d44306689b1a
  }
  if (rosePetalsList[conut]) {
    rosePetalsList[conut].className = "flower_animation";
    conut += 1;
    setTimeout(()=>{
      flowerStartBtnEle.disabled = false;
<<<<<<< HEAD
    },3000)
  }
});

=======
    },5000)
  }
});
>>>>>>> a3e61b94312127d033c016aae2a9d44306689b1a
