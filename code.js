"use strict"
/*
ТЗ на сегодня 
Привет! Сегодня нужно
-сделать так что бы стрелочка поворачивалась
- сделать анимацию исчезновения
- сделать много faq
- сделать калькулятор
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
    faq_arrow.classList.toggle('animated');
    faq_arrow.classList.toggle('arrow_rotate');
    faq_arrow.classList.toggle('heartBeat');

    if(!faq_answer.classList.contains('zoomIn')){
        faq_answer.classList.add('spec_flex');  //дает видимость
        faq_answer.classList.remove('zoomOut'); //удаляет исчезновение если оно было
        faq_answer.classList.add('zoomIn'); // добавляет анимации появления 
    } else if(faq_answer.classList.contains('zoomIn')) {
        // сработает если уже появилось
        faq_answer.classList.remove('zoomIn');
        //убираем анимацию появления
        faq_answer.classList.add('zoomOut');
        //добавляем анимацию исчезновения
        setTimeout(() => {
            faq_answer.classList.remove('spec_flex');
        }, 700);
            //удаляем класс с видимостью
       

    }
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