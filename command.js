const display =  document.getElementById('bkg');
//const colorIn = document.getElementById('colorIn');
//display.style.backgroundColor = color;

const text = document.getElementById('textIn');
const btn = document.getElementById('btn');



btn.onclick = function() {
    document.write(text.value);
}