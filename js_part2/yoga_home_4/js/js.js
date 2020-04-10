window.addEventListener('DOMContentLoaded', function () {

    'use strict'
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target === tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer
    let deadline = '2020-04-11';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds,
            minutes,
            hours;
        if (t < 0) {
            seconds = 0;
            minutes = 0;
            hours = 0;
        } else {
            seconds = Math.floor((t / 1000) % 60);
            minutes = Math.floor((t / 1000 / 60) % 60);
            hours = Math.floor((t / (1000 * 60 * 60)));
        }

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(() => {
                let t = getTimeRemaining(endTime);
                if (t.total < 0) {
                    clearInterval(timeInterval);
                    hours.textContent = t.hours + '0';
                    minutes.textContent = t.minutes + '0';
                    seconds.textContent = t.seconds + '0';
                } else {
                    hours.textContent = t.hours < 10 ? '0' + t.hours : t.hours;
                    minutes.textContent = t.minutes < 10 ? '0' + t.minutes : t.minutes;
                    seconds.textContent = t.seconds < 10 ? '0' + t.seconds : t.seconds;
                }
            }, 1000);
    }

    setClock('timer', deadline);

    //Model

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    //Узнать подробнее для табов
    let descriptions = document.querySelectorAll('.description');

    descriptions.forEach(function (item) {
        let btn = item.querySelector('.description-btn');
        btn.addEventListener('click', function () {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    })

});