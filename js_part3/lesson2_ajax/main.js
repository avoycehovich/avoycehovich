let inputUa = document.getElementById('ua'),
    inputUsd = document.getElementById('usd');

inputUa.addEventListener('input', () => {
    let request = new XMLHttpRequest();
    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    //status
    //statusText
    //responseText or response
    //readyState

    request.addEventListener('readystatechange', function () {
        if (request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputUa.value / data.usd;
        } else {
            inputUsd.value = 'Something wrong';
        }
    });
});