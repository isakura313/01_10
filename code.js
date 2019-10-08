"use strict"


let quest = document.querySelector('.your_question');
let button = document.querySelector('.wrapper_button__button');
let cross = document.querySelector('i');
let toggle = document.querySelector('.faq_toggle');
let answer = document.querySelector('.faq_answer');
let arrow = document.querySelector('.spec');


toggle.onclick = () =>{
	answer.classList.toggle('spec_flex');
	answer.classList.add('flipInX');

}







button.onclick = () => {
    if(quest.classList.contains('bounceOutLeft')){
        quest.classList.remove('bounceOutLeft');
    }
    quest.style.display = "flex";
    quest.classList.add('animated', 'bounceInRight');
}


cross.onclick = () => {
    quest.classList.remove('bounceInRight');
    quest.classList.add('bounceOutLeft');
    //  quest.style.display = "none";
}









// button.onclick = function(){
//     quest.style.display = "flex";
// }

// button.addEventListener('click', function(){
//     quest.style.display = "flex";
// })

// function show(){
//     quest.style.display = "flex";
// }