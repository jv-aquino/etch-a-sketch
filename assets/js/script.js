const container = document.querySelector('.container');
const grid = document.createElement('div');
grid.style.cssText = "display: flex;"

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearDiv);

let bgColor = '#0000ff';

let lastSize = 16;

const color = document.querySelector('#color');
color.addEventListener('click', changeColor);
color.addEventListener('change', changeColor);

const random = document.querySelector('#random');
let randomSet = 'unset';
random.addEventListener('click', toggleRandom);

let heigth = container.offsetHeight;
let width = container.offsetWidth;

let mouseDown = false;
checkMouseDown();

constructDiv(16);

function constructDiv(gridSize) {
  lastSize = gridSize;
  for (let i = 0; i < gridSize; i++) {
    const column = document.createElement('div');
    for (let j = 0; j < gridSize; j++) {
        const div = document.createElement('div');
        div.style.cssText = 'height:' + heigth / gridSize + 
        'px; width: ' + width / gridSize + 'px;';

        div.addEventListener('mousedown', changeBgColor);
        div.addEventListener('mouseover', changeBgColor);

        column.appendChild(div);
    }
    grid.appendChild(column);
  }
  container.append(grid);
}

function changeBgColor(e) {
  if (e.type === 'mouseover' && !mouseDown) return;
  e.target.style.backgroundColor = bgColor;
}

function changeColor() {
  bgColor = color.value;
}

function toggleRandom() {
  if (randomSet == 'set') {
    randomSet = 'unset';
    random.style.backgroundColor = 'red';
  }
  else {
    randomSet = 'set';
    random.style.backgroundColor = 'green';
  }
}

function clearDiv() {
  
  while (grid.lastChild) {
    grid.removeChild(grid.lastChild);
  }

  container.removeChild(grid);
  constructDiv(lastSize);
}

function checkMouseDown() {
  document.body.addEventListener('mousedown', () => {
    mouseDown = true;
  });

  document.body.addEventListener('mouseup', () => {
    mouseDown = false;
  });
}