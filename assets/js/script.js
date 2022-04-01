const container = document.querySelector('.container');
const grid = document.createElement('div');
grid.style.cssText = "display: flex;"

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearDiv);

let lastSize = 16;

let heigth = container.offsetHeight;
let width = container.offsetWidth;

let mouseDown = false;
checkMouseDown();

constructDiv(16);
container.appendChild(grid);

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
}

function changeBgColor(e) {
  if (e.type === 'mouseover' && !mouseDown) return;
  e.target.style.backgroundColor = 'blue';
}

function clearDiv() {
  
  while (grid.lastChild) {
    grid.removeChild(grid.lastChild);
  }

  container.removeChild(grid);
  constructDiv(lastSize);
  container.append(grid);
}

function checkMouseDown() {
  document.body.addEventListener('mousedown', () => {
    mouseDown = true;
  });

  document.body.addEventListener('mouseup', () => {
    mouseDown = false;
  });
}