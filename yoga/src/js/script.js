import 'nodelist-foreach-polyfill';
require('formdata-polyfill')


window.addEventListener("DOMContentLoaded", function () {

    'use strict'
    let calc = require('./parts/cacl'),
        modal = require('./parts/modal'),
        slider = require('./parts/slider'),
        tabs = require('./parts/tabs'),
        form = require('./parts/form'),
        timer = require('./parts/timer');

    calc();
    modal();
    slider();
    tabs();
    form();
    timer();
});