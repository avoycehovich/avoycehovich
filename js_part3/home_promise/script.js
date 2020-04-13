let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    function convert() {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('GET', 'current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();

            request.onreadystatechange = function () {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        resolve(this.response)
                    }
                    else {
                        reject();
                    }
                }
            };
        });
    }

    convert()
        .then(response => {
            let data = JSON.parse(response);

            inputUsd.value = inputRub.value / data.usd;
        })
        .catch(() => {
            inputUsd.value = 'Something wrong';
        });

    // if (request.readyState === 4 && request.status === 200) {
    //     let data = JSON.parse(request.response);
    //
    //     inputUsd.value = inputUa.value / data.usd;
    // } else {
    //     inputUsd.value = 'Something wrong';
    // }
});