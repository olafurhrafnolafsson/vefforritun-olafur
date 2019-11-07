const ENTER_KEYCODE = 13;
var takki = document.getElementsByClassName("item__button");
var itz = document.getElementsByClassName("item");

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');
  text.init(form, items);
});
const text = (() => {
  let items;
                    
  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);
    _items.addEventListener("click", deleteItem); 
    _items.addEventListener("click", edit); 
    _items.addEventListener("keyup", commit); 
    _items.addEventListener("click", commit);
    _items.addEventListener("change", finish);
  }
  function formHandler(e) {
    e.preventDefault();
    const textarea = document.querySelector('form').firstElementChild.value;
    add(textarea);
    document.querySelector('form').firstElementChild.value = "";
  }

  function finish(e) {
   if(event.target.checked == true) {
    event.target.parentNode.classList.add("item--done");
  }
   else {
    event.target.parentNode.classList.remove("item--done");
   }
  }
   function edit(e) {
    if(event.target.classList.contains('item__text')){
     let curr = event.target.textContent;
     let nyrtexti = document.createElement("input");
     nyrtexti.classList.add("item__edit")
     nyrtexti.setAttribute("type", "text");
     nyrtexti.value = curr;
     event.target.parentNode.replaceChild(nyrtexti,e.target);
     nyrtexti.focus();
    }
  }
  function commit(e) {
  var key = event.which || event.keyCode;
  if (key === ENTER_KEYCODE){
    let curr = event.target.value;
    let nyrtexti = document.createElement("span");
    nyrtexti.classList.add("item__text");
    nyrtexti.textContent = curr;
    event.target.parentNode.replaceChild(nyrtexti, event.target);
  }
}
  function add(value) {
    const nyttItem = document.createElement("li");
    nyttItem.classList.add("item");
    items.appendChild(nyttItem);

    const nyttInput = document.createElement("input");
    nyttInput.setAttribute("type" , "checkbox");
    nyttInput.classList.add("item__checkbox");
    nyttItem.appendChild(nyttInput);

    const nySpan = document.createElement("span");
    nySpan.classList.add("item__text");
    nySpan.textContent = value;
    nyttItem.appendChild(nySpan);

    const nyrTakki = document.createElement("button");
    nyrTakki.classList.add("item__button");
    nyrTakki.textContent = "Eyða";
    nyttItem.appendChild(nyrTakki);
  }
  function deleteItem(e) {
    if (event.target.className == "item__button")
      event.target.parentElement.remove();
  }
  return {
    init: init
  }
})();