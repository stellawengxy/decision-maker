let gachaBtn = document.querySelector('#gachaBtn');
// history list
let choicesListLoc = JSON.parse(localStorage.getItem("choicesList"));

// dan_gund Element 
let danGundEle = document.querySelector('#dan_gund');

let HMLTStr = ``;

// init 
const init =  () =>{
    if(choicesListLoc && choicesListLoc.length>0){
        for (let index = 1; index <= choicesListLoc.length; index++) {
            HMLTStr += `<span class="qiu_${index} diaol_${index}"></span>`
        }
        danGundEle.innerHTML = HMLTStr;
    }
}


gachaBtn.addEventListener('click',()=>{

    for (let index = 1; index <= choicesListLoc.length; index++) {
        HMLTStr += `<span class="qiu_${index} diaol_${index}"></span>`
    }

    let number =Math.floor( choicesListLoc.length * Math.random() + 1);
    
})

// init ball
init();