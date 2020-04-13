let options = {
    width: 1366,
    height: 768,
    bg: 'red',
    font: {
        size: '16px',
        color: '#fff'
    }
};

let toJsonObj = JSON.stringify(options),
    fromJsonObj = JSON.parse(toJsonObj);
console.log(toJsonObj);
console.log(fromJsonObj);