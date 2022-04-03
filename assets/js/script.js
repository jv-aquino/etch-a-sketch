const container = document.querySelector('.container');
const grid = document.createElement('div');
grid.style.cssText = "display: flex;"

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearDiv);
clear.addEventListener('click', () => {
  constructDiv(lastSize);
});

let bgColor = '#0000ff';

const newGrid = document.querySelector('#new');
newGrid.addEventListener('click', getNewGrid);

let lastSize = 16;

const color = document.querySelector('#color');
grid.addEventListener('mouseover', changeColor);
color.addEventListener('change', changeColor);

const random = document.querySelector('#random');
let randomSet = false;
random.addEventListener('click', toggleRandomSet);

const gray = document.querySelector('#gray');
let graySet = false;
gray.addEventListener('click', toggleGraySet);

let heigth = container.clientHeight;
let width = container.clientWidth;

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

  if (randomSet == true) {
    e.target.style.backgroundColor = getRandomColor();
  }
  else if (graySet == true) {
    if (e.target.style.backgroundColor != 'black') {
      e.target.style.backgroundColor = 'black';
      e.target.style.opacity = 0;
    }
    e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
  }
  else {
    e.target.style.backgroundColor = bgColor;
  }

}

function changeColor() {
  bgColor = color.value;
}

function getRandomColor() {
  let color = '#';
   for (let i = 0; i < 6; i++){
      const num = Math.floor(Math.random() * 16);
      color += (num).toString(16);
   };
   return color;
}

function toggleRandomSet() {
  if (randomSet == true) {
    randomSet = false;
    random.style.color = 'red';
  }
  else {
    if(graySet == true) {
      toggleGraySet();
    }
    randomSet = true;
    random.style.color = '#32cd32';
  }
}

function toggleGraySet() {
  if (graySet == true) {
    graySet = false;
    gray.style.color = 'red';
  }
  else {
    if(randomSet == true) {
      toggleRandomSet();
    }
    graySet = true;
    gray.style.color = '#32cd32';
  }
}

function clearDiv() {
  
  while (grid.lastChild) {
    grid.removeChild(grid.lastChild);
  }

  container.removeChild(grid);
}

function getNewGrid() {  
  let size;

  do {
    size = prompt('New grid size (between 8 and 100):');
    size = Number(size);
  } 
  while (isNaN(size) || size < 8 || size > 100);

  clearDiv();
  constructDiv(size);
}

function checkMouseDown() {
  document.body.addEventListener('mousedown', () => {
    mouseDown = true;
  });

  document.body.addEventListener('mouseup', () => {
    mouseDown = false;
  });
}