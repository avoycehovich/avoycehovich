let menu = document.querySelector('.menu');
let menuItems = document.querySelectorAll('.menu-item');
menu.insertBefore(menuItems[2], menuItems[1]);
let fifthItem = document.createElement('li');
fifthItem.classList.add('menu-item');
fifthItem.textContent = 'Пятый пункт';
menu.appendChild(fifthItem);

document.body.style.background = "url('img/apple_true.jpg')";

document.getElementById('title').innerHTML = 'Мы продаем только <b>подлинную</b> технику Apple';

let column = document.querySelectorAll('.column')[1];
column.removeChild(document.querySelector('.adv'));

let ans = prompt("Какое ваше отношение к техинки Apple?", "");

document.querySelector('.prompt').textContent = ans;