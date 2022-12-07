/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */




   





/* input choices */

let form = document.forms[0];
let button = document.querySelector(".next");
let userInput = [];

function addField(plusElement) {
  // Stopping the function if the input field has no value.
  if (plusElement.previousElementSibling.value.trim() === "") {
    return false;
  }
  // If input filed has a value, add the value to userInput array
  else {
    userInput.push(plusElement.previousElementSibling.value.trim())
    console.log(userInput)
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

  // Adding the elements to the DOM.
  form.insertBefore(addDiv, button);
  addDiv.appendChild(field);
  addDiv.appendChild(plus);
  addDiv.appendChild(minus);

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
  minusElement.parentElement.remove();
  console.log(userInput);
}




/* coin page */

/*let heads = 0;
let tails = 0;*/
const coin = document.querySelector(".coin");
const flipBtn = document.getElementById("flip-button");
const resetBtn = document.getElementById("reset-button");
/*let headsChoice = document.querySelector("#head-counts");
let tailsChoice = document.querySelector("#tails-count");
*/
let headsBox = document.querySelector("#heads-count");




flipBtn.addEventListener("click", () => {
let i = Math.floor(Math.random() * 2);
coin.style.animation = "none";
if(i){
  setTimeout(function(){
    coin.style.animation = "spin-heads 3s forwards";
  }, 100);
  heads++;

}
else{
  setTimeout(function(){
    coin.style.animation = "spin-tails 3s forwards";
  }, 100);
  tails++;


}
});


flipBtn.addEventListener("click", () => {
let i = Math.floor(Math.random() * 2);
coin.style.animation = "none";
if(i){
  setTimeout(function(){
    coin.style.animation = "spin-heads 3s forwards";
  }, 100);
  heads++;

}
else{
  setTimeout(function(){
    coin.style.animation = "spin-tails 3s forwards";
  }, 100);
  tails++;

}
disableButton();
});

function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
}



