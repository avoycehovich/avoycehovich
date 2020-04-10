let box = document.querySelector('.box'),
    width = box.clientWidth,
    height = box.clientHeight,
    btn = document.querySelector('button');

console.log(box.getBoundingClientRect());

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop);


btn.addEventListener('click', function () {
    // box.style.height = box.scrollHeight + 'px';
    box.scrollTop = 0;
});