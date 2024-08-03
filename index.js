let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}
const textBox = document.getElementById("textbox");
const taskCreate = document.getElementById("taskCreate");

let i = 0;

function createTask(){
    const input = document.getElementById("textbox").value;
    console.log("input", input);
    closePopup();
    const myul = document.getElementById("myul");
    const li = document.createElement("li");
    li.innerText = input
    myul.appendChild(li);
    delButton = document.createElement("button");
    li.appendChild(delButton)
    delButton.className = "delbutton";
    delButton.onclick = function () {
    document.getElementById("myul").removeChild(li)
    document.getElementsByClassName("delbutton").innerText = "X";
    expandDiv()
    };
    
}
function delButton(id){
    const li = document.getElementById(id).
    li.remove();
    
}
function expandDiv(){
    const expandDiv = document.getElementById("box");
    expandDiv.classList.add("box");
}

