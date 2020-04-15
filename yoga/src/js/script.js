window.addEventListener("DOMContentLoaded", function () {

    'use strict'
    let calc = require('./parts/cacl'),
        modal = require('./parts/modal'),
        slider = require('./parts/slider'),
        tabs = require('./parts/tabs'),
        timer = require('./parts/timer');

    calc();
    modal();
    slider();
    tabs();
    timer();
});