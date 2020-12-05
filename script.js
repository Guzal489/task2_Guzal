//Переменные
var generate = document.getElementById('generate');
var clear = document.getElementById('clear');
var c_wrapper = document.getElementById('wrapper_bg');
var text = document.getElementById("text");

//Массивы
var textRandom = ["Covid-19","Q-Digital","Программирование","JavaScript","ОГОГО","МВЕУ","Sensation"];

var randomStyle = ["style1","style2","style3","style4","style5","style6"];

//Генератор цвета фона и текста
Array.prototype.randomColor = function ()
{
   return this[Math.floor(Math.random() * this.length)]
};

Array.prototype.randomText = function ()
{
   return this[Math.floor(Math.random() * this.length)]
};

generate.addEventListener('click', function ()
{
   var Random_Color = randomStyle.randomColor();
   var Random_Text = textRandom.randomText();

   c_wrapper.classList.remove("style1","style2","style3","style4","style5","style6");
   c_wrapper.classList.add(Random_Color);
   
   text.classList.remove("style1","style2","style3","style4","style5","style6");
   text.classList.add(Random_Color);

   text.innerHTML = Random_Text;
   text.insertAdjacentElement('afterbegin', text);
});

//Очистка
clear.addEventListener('click', function ()
{
   c_wrapper.classList.remove("style1","style2","style3","style4","style5","style6");
   text.innerHTML = '';
})
