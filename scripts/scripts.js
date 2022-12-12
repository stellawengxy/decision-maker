


const form_wake = document.querySelector("#form");
const choicesListLoc = JSON.parse(sessionStorage.getItem('choicesList'));
let userInput = [];
if(choicesListLoc && choicesListLoc.length > 0){
  userInput = choicesListLoc;
}



function addField(plusElement) {
  let button = document.querySelector(".next");

  if(userInput.length  >= 10) return;

 
  if (plusElement.previousElementSibling.value.trim() === "") {
    return false;
  }
 
  else {
    userInput.push(plusElement.previousElementSibling.value.trim())
    sessionStorage.setItem('choicesList',JSON.stringify(userInput));
  }


  let addDiv = document.createElement("div");
  addDiv.setAttribute("class", "field");


  let field = document.createElement("input");
  field.setAttribute("type", "text");
  field.setAttribute("name", "notes[]");


  let plus = document.createElement("span");
  plus.setAttribute("onclick", "addField(this)");



  let plusText = document.createTextNode("+");
  plus.appendChild(plusText);


  let minus = document.createElement("span");
  minus.setAttribute("onclick", "removeField(this)");
  let minusText = document.createTextNode("-");
  minus.appendChild(minusText);

  console.log(form_wake);

  form_wake.insertBefore(addDiv, button);
  addDiv.appendChild(field);
  addDiv.appendChild(plus);
  addDiv.appendChild(minus);


  console.log(addDiv);


  plusElement.nextElementSibling.style.display = "block";

  plusElement.style.display = "none"; 
}

function removeField(minusElement) {


  userInput.splice(
    
    userInput.indexOf(minusElement.parentElement.firstElementChild.value),
    1);
    sessionStorage.setItem('choicesList',JSON.stringify(userInput));
  minusElement.parentElement.remove();
  console.log(userInput);
}
