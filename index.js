let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}
const textBox = document.getElementById("textbox");
const taskCreate = document.getElementById("taskCreate");


function createTask(){
    const input = document.getElementById("textbox").value;
    console.log("input", input);
    closePopup();
    const myul = document.getElementById("myul");
    const li = document.createElement("li");
    li.innerText = input
    myul.appendChild(li);
}
