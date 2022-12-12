let gachaBtn = document.querySelector("#gachaBtn");

let choicesListLoc = JSON.parse(sessionStorage.getItem("choicesList"));
let content_text = document.querySelector('#content_text');

let capsuleEle = document.querySelector("#capsule");

let HMLTStr = ``;


const init = () => {
  if (choicesListLoc && choicesListLoc.length > 0) {
    for (let index = 1; index <= choicesListLoc.length; index++) {
      HMLTStr += `<span class="capsule_${index} rollout_${index}"></span>`;
    }
    capsuleEle.innerHTML = HMLTStr;
  }
};
gachaBtn.addEventListener("click", () => {
    gachaBtn.disabled = true;
    content_text.innerHTML = 'Your Answer';
  let number = Math.floor(choicesListLoc.length * Math.random() + 1);
  for (let index = 1; index <= choicesListLoc.length; index++) {
    let capsule_ClassName = document.querySelector(`.capsule_${index}`).className;
    document.querySelector(`.capsule_${index}`).className = capsule_ClassName.replace(
      `rollout_${index}`,
      ""
    );
    capsule_ClassName = document.querySelector(`.capsule_${index}`).className;
    // console.log(`${capsule_ClassName} move_${index}`);
    document.querySelector(
      `.capsule_${index}`
    ).className = `${capsule_ClassName} move_${index}`;
  }

  setTimeout(function () {
    for (let index = 1; index <= choicesListLoc.length; index++) {
      let capsule_ClassName = document.querySelector(`.capsule_${index}`).className;
      document.querySelector(`.capsule_${index}`).className = capsule_ClassName.replace(
        `move_${index}`,
        ""
      );
    }
  }, 1100);

  setTimeout(function () {
    let curClass = document.querySelector(".dispenseOutput span").className;
    switch (number % 4) {
      case 1:
        curClass += " drop_one";
        document.querySelector(".dispenseOutput span").className = curClass;
        break;
      case 2:
        curClass += " drop_two";
        document.querySelector(".dispenseOutput span").className = curClass;
        break;
      case 3:
        curClass += " drop_three";
        document.querySelector(".dispenseOutput span").className = curClass;
        break;
      case 0:
        curClass += " drop_four";
        document.querySelector(".dispenseOutput span").className = curClass;
        break;
    }

    let currentClass = document.querySelector(".dispenseOutput").className;
    currentClass = currentClass += ' drop_Y';
    document.querySelector(".dispenseOutput").className = currentClass;

  }, 1100);

  setTimeout(function () {
    gachaBtn.disabled = false;
    let currentClass = document.querySelector(".dispenseOutput").className;
    currentClass = currentClass.replace(`drop_Y`, "none");
    document.querySelector(".dispenseOutput").className = currentClass;
    document.querySelector(".dispenseOutput span").removeAttribute("class");


    content_text.innerHTML = choicesListLoc[number-1];
  }, 2500);
});

// init ball
init();
