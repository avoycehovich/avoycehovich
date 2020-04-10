class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let div = document.createElement('div');
        div.textContent = 'Любой текст';
        div.style.cssText = `background-color: ${this.bg}; font-sixe: ${this.fontSize}; text-align: ${this.textAlign}`;
        document.body.appendChild(div);
    }
}

let obj1 = new Options('300px', '300px', 'red', '20px', 'center');
obj1.createDiv();