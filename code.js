let quest = document.querySelector('.your_question');
let button = document.querySelector('.wrapper_button__button');
let cross = document.querySelector('i');

button.onclick = () => {
    quest.style.display = "flex";
}

button.onclick = function(){
    quest.style.display = "flex";
}

button.addEventListener('click', function(){
    quest.style.display = "flex";
})

function show(){
    quest.style.display = "flex";
}

cross.onclick = () => {
    quest.style.display = "none";
}