const display =  document.getElementById('bkg');
const colorIn = document.getElementById('colorIn');
const btn = document.getElementById('btn');
const background = document.querySelector('body');
const text = document.getElementById('text');
btn.onclick = function() {
    text.style.backgroundColor = colorIn.value;
    text.style.border = 0;
    background.style.backgroundColor =colorIn.value;
}