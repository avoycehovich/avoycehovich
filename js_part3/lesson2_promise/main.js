let drink = 0;
function shoot(arrow, headshot, fail) {
    console.log("Вы сделали выстрел...");

    setTimeout(function () {
        Math.random() > .5 ? headshot({}) : fail('Вы промахнулись');
    }, 2000);
}

function win() {
    console.log("You win");
    (drink === 1) ? buyBeer() : giveMoney();
}

function loose() {
    console.log("You loose");
}

function buyBeer() {
    console.log('Вам купили пиво');
}

function giveMoney() {
    console.log('Вам дали денег');
}

shoot({},
    function (mark) {
        console.log('Вы попали в цель');
        win(mark, buyBeer, giveMoney);
    },
    function (miss) {
        console.log(miss);
        loose();
    }
);