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

// работа с формой
let wp_form = document.querySelector('.wrapper_form');


// тут у нас будет валидизация формы
wp_form.onsubmit = function(e){
    e.preventDefault();
  
    let errorElement = wp_form.querySelector('.error_message');

    let nameVal = wp_form.querySelector("[name='name']").value;
    let fioVal = wp_form.querySelector("[name='surname']").value;
    let phoneVal = wp_form.querySelector("[name='tel']").value;
    let emailVal = wp_form.querySelector("[name='mail']").value;
    let checkBox = wp_form.querySelector("[type='checkbox']");

    var reg = new RegExp('^[0-9]+$');
    // alert(reg.test(phoneVal));
    if(nameVal == '' || 
        fioVal == '' 
        || phoneVal == '' 
        || emailVal == '' 
        || nameVal.length < 2 
        || !reg.test(phoneVal)
        || checkBox.checked != "true"

        ){
        errorElement.innerHTML = "Вы не заполнили все поля, молодой человек!";
  
        if(nameVal == ''){
            wp_form.querySelector("[name='name']").style.border = "red solid 2px";
        } else if(nameVal.length < 2 ){
            wp_form.querySelector("[name='name']").style.border = "red solid 2px";
            wp_form.querySelector(".name_helper").innerHTML = "Имя должно быть длинее";
        }
        else{
            wp_form.querySelector("[name='name']").style.border = "green solid 2px";
        }
        
        if(fioVal == ''){
            wp_form.querySelector("[name='surname']").style.border = "red solid 2px";
        } 
        else{
            wp_form.querySelector("[name='surname']").style.border = "green solid 2px";
        }
        
        if(phoneVal == ''){
            wp_form.querySelector("[name='tel']").style.border = "red solid 2px";
        } else if(!reg.test(phoneVal)){
            wp_form.querySelector(".tel_helper").innerHTML = "Телефон состоит из цифр";
            wp_form.querySelector("[name='tel']").style.border = "red solid 2px";
        }
        else{
            wp_form.querySelector("[name='tel']").style.border = "green solid 2px";
        }

        if(emailVal == ''){
            wp_form.querySelector("[name='mail']").style.border = "red solid 2px";
        } 
        else{
            wp_form.querySelector("[name='mail']").style.border = "green solid 2px";
        }

        if(checkBox.checked != true ){
            wp_form.querySelector(".checkbox_helper").innerHTML = 'ну ка согласился на обработку данных!';
        } else if(checkBox.checked == true ){
            wp_form.querySelector(".checkbox_helper").innerHTML = ' все клево';

        }
    } else if(!reg.test(phoneVal)){
         alert('введите числа'); 
    }
     else {alert("форма отправлена!");
     
    }

};


//смена тем на нашем сайте
// по кнопке 1 у нас ставится темная тема 49
//по кнопка 2 - как была 50
//по кнопке 3 - альтернативная 51 
//document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR');
//addeventlinstener -вообще на пространство документа
// а когда происходит фокус формы - тогда листенер выключается, и наоборот


function change(variable ,color){
    document.querySelector(':root').style.setProperty(variable, color);
}


document.addEventListener('keypress', handle);


wp_form.querySelector("[name='tel']").onfocus = function()
{
    document.removeEventListener('keypress', handle);
}
wp_form.querySelector("[name='tel']").onblur = function()
{
    document.addEventListener('keypress', handle);
}


 function handle(e){
     if (e.keyCode == 49 ){
         change('--dorange','green');
         change('--ddarkblue','black');

    } else if(e.keyCode == 50){
        change('--dorange','#FE9611');
        change('--ddarkblue','#1A70BB');

    } else if(e.keyCode == 51){
        change('--dorange',"pink");
        change('--ddarkblue',"#5D1F82");
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