var enterButton = document.getElementById("enter");
var doneButton = document.getElementById("done");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	//create list item
	var li = document.createElement("li");
	li.classList.add("newItem");
	// li.setAttribute("class", "myList");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	//create done button
	var dBtn = document.createElement("button");
	dBtn.setAttribute("class", "dBtn");
	dBtn.onclick = crossItem;
	dBtn.textContent = "Done";
	li.appendChild(dBtn);
	//create delete button
	var delBtn = document.createElement("button");
	delBtn.classList.add("delBtn")
	// delBtn.setAttribute("class", "delBtn");
	delBtn.onclick = deleteItem;
	delBtn.textContent = "x";
	li.appendChild(delBtn);
	//clear input box
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function crossItem(event) {
	event.target.parentNode.classList.add("done");
}

function deleteItem(eventDelete) {
	eventDelete.target.parentNode.remove();
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
