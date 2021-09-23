var button= document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputvalue(){
  return input.value.length;
}

function createList(){
  var li = document.createElement("li");
  var delButton = document.createElement("button");
  var div = document.createElement("div"); 
  div.classList.add("newItem");
  ul.appendChild(div);
  div.append(li, delButton);
  li.classList.add("task");
  li.appendChild(document.createTextNode(input.value));
  input.value="";
  delButton.classList.add("delClass");
  delButton.innerHTML='delete';
}
function deleteElement(){
  if (element.target.className === "del"){
		element.target.parentElement.remove();
	}

}

function addByButton(){
 if(inputvalue() > 0){
    createList();
    input.value ="";
  }
  else{
    alert("Enter a shopping item");
  }
}

function addByEnter(event){
  if(inputvalue() > 0 && event.keyCode == 13){
      createList();
      input.value ="";
    }

}
function deleteItem(element){
  if(element.target.className == "del"){
    element.target.parentElement.remove();
  }

}
function onClick(e){
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
    
 }
}
function handleUlClick (element) {
	onClick(element);
	deleteItem(element);
}

button.addEventListener("click", addByButton);
input.addEventListener("keypress", addByEnter);
ul.addEventListener("click", handleUlClick);
   


// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("mouseleave", function(){
//   console.log("CLICK!!!");
// })