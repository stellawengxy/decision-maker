
// 每次刷新都会将localStorage清空
let choicesList = JSON.parse(sessionStorage.getItem("choicesList"));
let HTMLStr = ``;
// 如果里面存在一个值的话 就将其清空
if (choicesList && choicesList.length > 0) {
  console.log(choicesList);
  choicesList.forEach((item) => {
    HTMLStr += `
                <div class="field">
                    <input id="userinput" type="text" value="${item}" name="notes[]">
                    <span onclick="addField(this)" style="display:none;">+</span>
                    <span onclick="removeField(this)" style="display:inline-block;">-</span>
                </div>
        `;
  });

  HTMLStr += `<div class="field">
  <input id="userinput" type="text" name="notes[]">
  <span onclick="addField(this)" >+</span>
  <span onclick="removeField(this)">-</span>
</div>`;

  HTMLStr += `<button class="next"></button>`;

  form_wake.innerHTML = HTMLStr;
}
