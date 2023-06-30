const barsContainer = document.getElementById('bars-container');
const numBars = 20;
let bars = [];
let UserDelay = 50;

function changeDataSize() {
barsContainer.innerHTML = '';

bars = [];
let numBars = parseInt(document.querySelector('.input-data-field').value);
// console.log();

// Create initial set of bars
for (let i = 0; i < numBars; i++) {
  const bar = document.createElement('div');
  bar.classList.add('bar');
  bar.style.width =  `${1000/numBars}px`;
  bar.style.height = `${Math.floor(Math.random() * 400) + 10}px`;
  barsContainer.appendChild(bar);
  bars.push(bar);
}
};

function changeSpeed() {
  UserDelay = 200 - 2 * ( parseInt( document.querySelector('.input-speed-field').value) );
}

