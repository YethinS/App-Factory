let input = document.getElementById("inputField");
let button = document.getElementById("addToDo");
let paragraph = document.getElementById("toDoContainer")
button.addEventListener('click', function(){
    var para = document.createElement('p')
    paragraph.innerText = input.value;
    paragraph.appendChild(para);
})