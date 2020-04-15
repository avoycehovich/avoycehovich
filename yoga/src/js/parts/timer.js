function timer() {
    let deadline = '2020-04-16';

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
}

module.exports = timer;