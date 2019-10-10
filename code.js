"use strict"
/*
ТЗ на следующий раз 
Привет! Сегодня нужно
 сделать много faq 

 Д/з
 Если пользователь вводит только строку, тогда калькулятор ругался
 if
 найти меотд определения строк
 до eval
 очистить и отругать пользователя
 */

// часть связанная с верхней формой
//  тут есть еще рафакторинг!!
let quest = document.getElementById('quest'); // получение по id
let upper_button = document.querySelector('.wrapper_button__button');
let cross = document.getElementById('cross_icon');

upper_button.onclick = () => {
    if(quest.classList.contains('bounceOutLeft')){
        quest.classList.remove('bounceOutLeft');
    }
    quest.style.display = "flex";
    quest.classList.add('animated', 'bounceInRight');
}

cross.onclick = () => {
    quest.classList.remove('bounceInRight');
    quest.classList.add('bounceOutLeft');
}
//конец верхней формы


//начало faq  
let panel_toggle = document.querySelector('.faq_toggle');
let faq_answer = document.querySelector('.faq_answer');
let faq_arrow = document.querySelector('.spec');

panel_toggle.onclick = () =>{
    faq_arrow.classList.add('animated');
    faq_arrow.classList.add('arrow_rotate');
    
    if(!faq_answer.classList.contains('zoomIn')){
        faq_arrow.classList.remove('arrow_rotate1');
        faq_arrow.classList.add('heartBeat');
        faq_arrow.classList.add('arrow_rotate');
        faq_answer.classList.add('spec_flex');  //дает видимость
        faq_answer.classList.remove('zoomOut'); //удаляет исчезновение если оно было
        faq_answer.classList.add('zoomIn'); // добавляет анимации появления 
    } else if(faq_answer.classList.contains('zoomIn')) {
        faq_arrow.classList.remove('heartBeat');
        faq_arrow.classList.remove('arrow_rotate');
        faq_answer.classList.remove('zoomIn');
        faq_answer.classList.add('zoomOut');
        setTimeout(() => {
            faq_arrow.classList.remove('arrow_rotate1');
            faq_answer.classList.remove('spec_flex');
        }, 700);

    }
}

//калькулятор
let input_calc = document.querySelector(".calc input");
let button_calc = document.querySelector(".calc__button");
let result = document.getElementById("result");
button_calc.onclick = () =>{

    result.innerHTML = "<span>Результат: </span>" + eval(input_calc.value);
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