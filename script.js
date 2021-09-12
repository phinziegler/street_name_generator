import NameGenerator from './nameGenerator.js';

const root = document.documentElement;
function lightMode() {  // change css variables
    root.style.setProperty('--backgroundColor', 'white');
    root.style.setProperty('--textColor', 'black');
    root.style.setProperty('--buttonColor','white');
    root.style.setProperty('--buttonFade','#CCC');
    root.style.setProperty('--linkColor','#666');
}
lightMode();

let genButton = document.getElementById('generate');
let result = document.getElementById('result');
let numNames = document.getElementById('numNames');
const gen = new NameGenerator();

genButton.addEventListener("click", () => {
    let amount = numNames.value;
    result.innerHTML = gen.generate(amount);
});