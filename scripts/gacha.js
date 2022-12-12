let gachaBtn = document.querySelector("#gachaBtn");
// history list
let choicesListLoc = JSON.parse(sessionStorage.getItem("choicesList"));
let content_text = document.querySelector('#content_text');
// capsule Element
let capsuleEle = document.querySelector("#capsule");

let HMLTStr = ``;

// init
const init = () => {
  if (choicesListLoc && choicesListLoc.length > 0) {
    for (let index = 1; index <= choicesListLoc.length; index++) {
      HMLTStr += `<span class="qiu_${index} diaol_${index}"></span>`;
    }
    capsuleEle.innerHTML = HMLTStr;
  }
};
gachaBtn.addEventListener("click", () => {
    gachaBtn.disabled = true;
    content_text.innerHTML = 'Your Answer';
  let number = Math.floor(choicesListLoc.length * Math.random() + 1);
  for (let index = 1; index <= choicesListLoc.length; index++) {
    let qiu_ClassName = document.querySelector(`.qiu_${index}`).className;
    document.querySelector(`.qiu_${index}`).className = qiu_ClassName.replace(
      `diaol_${index}`,
      ""
    );
    qiu_ClassName = document.querySelector(`.qiu_${index}`).className;
    // console.log(`${qiu_ClassName} wieyi_${index}`);
    document.querySelector(
      `.qiu_${index}`
    ).className = `${qiu_ClassName} wieyi_${index}`;
  }

  setTimeout(function () {
    for (let index = 1; index <= choicesListLoc.length; index++) {
      let qiu_ClassName = document.querySelector(`.qiu_${index}`).className;
      document.querySelector(`.qiu_${index}`).className = qiu_ClassName.replace(
        `wieyi_${index}`,
        ""
      );
    }
  }, 1100);

  setTimeout(function () {
    let curClass = document.querySelector(".zjdl span").className;
    switch (number % 4) {
      case 1:
        curClass += " diaL_one";
        document.querySelector(".zjdl span").className = curClass;
        break;
      case 2:
        curClass += " diaL_two";
        document.querySelector(".zjdl span").className = curClass;
        break;
      case 3:
        curClass += " diaL_three";
        document.querySelector(".zjdl span").className = curClass;
        break;
      case 0:
        curClass += " diaL_four";
        document.querySelector(".zjdl span").className = curClass;
        break;
    }

    let currentClass = document.querySelector(".zjdl").className;
    currentClass = currentClass += ' dila_Y';
    document.querySelector(".zjdl").className = currentClass;

    // $(".zjdl").removeClass("none").addClass("dila_Y");
    //  setTimeout(function (){
    //    // 出奖品
    //  for (var i = 0; i < jiangpin.length; i++ ) {
    //    if (number == i) {
    //      $("#jianpin_one").show();
    //      $("#jianpin_name").text(jiangpin[number])
    //    }
    //  }
    // },900);
  }, 1100);

  setTimeout(function () {
    gachaBtn.disabled = false;
    let currentClass = document.querySelector(".zjdl").className;
    currentClass = currentClass.replace(`dila_Y`, "none");
    document.querySelector(".zjdl").className = currentClass;
    document.querySelector(".zjdl span").removeAttribute("class");


    content_text.innerHTML = choicesListLoc[number-1];
  }, 2500);
});

// init ball
init();
