"use strict"


// кнопка регистрации показывается 
// имя пользователя в одной строку с кнопкой

//рандомая цитата
let arr_random = ['Суть жизни – найти самого себя', 'Смерть – это стрела, пущенная в тебя, а жизнь – то мгновенье, что она до тебя летит.', 'В диалоге с жизнью важен не ее вопрос, а наш ответ.' ]
let random_number = Math.floor(Math.random() * arr_random.length);
let h3_citata = document.getElementById("random_answer");
h3_citata.innerHTML = arr_random[random_number];


//регистрация пользователя
let user_name = document.getElementById('registration');
let submit = document.getElementById('submit');
let input_name = document.getElementsByName('nameuser');
user_name.style.display='none';

submit.onclick = () => {
    user_name.style.display='block';
    user_name.innerHTML = input_name[0].value;

}




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
let panel_toggle = document.querySelectorAll('.faq_toggle');
let faq_answer = document.querySelectorAll('.faq_answer');
let faq_arrow = document.querySelectorAll('.spec');


for (let i = 0; i < panel_toggle.length; i++) {
    panel_toggle[i].onclick = () => {
        faq_animate(faq_arrow[i], faq_answer[i]);
    }
    
}

function faq_animate(arrow, answer){
    arrow.classList.add('animated');
    arrow.classList.add('arrow_rotate');
    if(!answer.classList.contains('zoomIn')){
        arrow.classList.remove('arrow_rotate1');
        arrow.classList.add('heartBeat');
        arrow.classList.add('arrow_rotate');
        answer.classList.add('spec_flex');  //дает видимость
        answer.classList.remove('zoomOut'); //удаляет исчезновение если оно было
        answer.classList.add('zoomIn'); // добавляет анимации появления 
    } else if(answer.classList.contains('zoomIn')) {
        arrow.classList.remove('heartBeat');
        arrow.classList.remove('arrow_rotate');
        answer.classList.remove('zoomIn');
        answer.classList.add('zoomOut');
        setTimeout(() => {
            arrow.classList.remove('arrow_rotate1');
            answer.classList.remove('spec_flex');
        }, 700);
    
    }
    
}





//калькулятор
let input_calc = document.querySelector(".calc input");
let button_calc = document.querySelector(".calc__button");
let result = document.getElementById("result");



button_calc.onclick = () =>{
    try{
    if(input_calc.value == ''){ 
        return alert("Ты забыл ввести, Вась!"); 
    } else  if(isNaN(eval(input_calc.value))){
        return alert("Введенные данные в корне неверны!"); 
    }
    result.innerHTML = "<span>Результат: </span>" + eval(input_calc.value);
}
catch(err){
    alert("Скорее всего неверные данные!");
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