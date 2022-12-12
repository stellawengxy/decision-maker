/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */




   





/* input choices */
const form_wake = document.querySelector("#form");
const choicesListLoc = JSON.parse(sessionStorage.getItem('choicesList'));
let userInput = [];
if(choicesListLoc && choicesListLoc.length > 0){
  userInput = choicesListLoc;
}



function addField(plusElement) {
  let button = document.querySelector(".next");
  // 判断问题是否大于10个 如果大于十个问题的话 就不继续往下执行
  if(userInput.length  >= 10) return;

  // Stopping the function if the input field has no value.
  if (plusElement.previousElementSibling.value.trim() === "") {
    return false;
  }
  // If input filed has a value, add the value to userInput array
  else {
    userInput.push(plusElement.previousElementSibling.value.trim())
    sessionStorage.setItem('choicesList',JSON.stringify(userInput));
  }

  // creating the div container.
  let addDiv = document.createElement("div");
  addDiv.setAttribute("class", "field");

  // Creating the input element.
  let field = document.createElement("input");
  field.setAttribute("type", "text");
  field.setAttribute("name", "notes[]");

  // Creating the plus span element.
  let plus = document.createElement("span");
  plus.setAttribute("onclick", "addField(this)");



  let plusText = document.createTextNode("+");
  plus.appendChild(plusText);

  // Creating the minus span element.
  let minus = document.createElement("span");
  minus.setAttribute("onclick", "removeField(this)");
  let minusText = document.createTextNode("-");
  minus.appendChild(minusText);

  console.log(form_wake);
  // Adding the elements to the DOM.
  form_wake.insertBefore(addDiv, button);
  addDiv.appendChild(field);
  addDiv.appendChild(plus);
  addDiv.appendChild(minus);


  console.log(addDiv);

  // Un hiding the minus sign.
  plusElement.nextElementSibling.style.display = "block"; // the minus sign
  // Hiding the plus sign.
  plusElement.style.display = "none"; // the plus sign
}

function removeField(minusElement) {
  // splice takes two paramters
  // first parameter: starting index/location where we want to remove
  // second parameter: how many places/items we want to remove

  userInput.splice(
    // to grab the index, call the indexOf method
    // indexOf method: 
    // takes in one parameter, a value in the array
    // returns and index/location of where the value is in the array
    
    // to get the value,  call minusElement.parentElement.firstElementChild.value
    // the first child of the parent is always the textbox
    
    userInput.indexOf(minusElement.parentElement.firstElementChild.value),
    1);
    sessionStorage.setItem('choicesList',JSON.stringify(userInput));
  minusElement.parentElement.remove();
  console.log(userInput);
};
