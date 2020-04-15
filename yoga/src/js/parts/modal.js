function modal() {
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
    });

    //Modal Form
    let message = {
        loading: 'Loading...',
        success: 'Thanks.',
        failure: 'Something wrong'
    };

    let form = document.querySelector('.main-form'),
        contactForm = document.getElementById('form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    function sendForm(elem) {
        elem.addEventListener('submit', function (e) {
            e.preventDefault();
            let formData = new FormData(elem);
            let obj = {};
            formData.forEach(function (value, key) {
                obj[key] = value;
            });

            let json = JSON.stringify(obj);

            function postData(data) {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();

                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status === 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    };

                    request.send(data);
                });
            } // end postData

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(json)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);
        });
    }

    sendForm(form);
    sendForm(contactForm);
}

module.exports = modal;