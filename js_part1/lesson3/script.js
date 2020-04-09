function first() {
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJs(lang, callback) {
    console.log("I  learn " + lang);
    callback();
}

function done() {
    console.log("Я прошел третиий урок");
}

learnJs("JS", done);