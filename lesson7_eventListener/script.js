let btns = document.querySelectorAll('button'),
    wrapp = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// btns[0].onclick = function () {
//     alert("Вы нажали первую кнопку");
// };


// btns[0].addEventListener('click', function (event) {
//     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });
//
// wrapp.addEventListener('click', function () {
//     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });

link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

btns.forEach(function (item) {
   item.addEventListener('mouseleave', function () {
       console.log('Вышли');
   })
});

// btns[0].addEventListener('click', function () {
//     alert("Вы опять нажали первую кнопку");
// });

// btns[0].addEventListener('mouseenter', function () {
//    alert('Вы навели на первую кнопку');
// });