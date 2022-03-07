const container = document.querySelector('.container');

let heigth = container.offsetHeight;
let width = container.offsetWidth;
let gridSize = 16;

let mouseDown = false;
checkMouseDown();

for (let i = 0; i < gridSize; i++) {
  const column = document.createElement('div');
  for (let j = 0; j < gridSize; j++) {
      const div = document.createElement('div');
      div.style.cssText = 'height:' + heigth / gridSize + 
      'px; width: ' + width / gridSize + 
      'px; border: 1px solid black;';

      div.addEventListener('mousedown', changeBgColor);
      div.addEventListener('mouseover', changeBgColor);

      column.appendChild(div);
  }
  container.appendChild(column);
}

function changeBgColor(e) {
  if (e.type === 'mouseover' && !mouseDown) return;
  e.target.style.backgroundColor = 'blue';
}

function checkMouseDown() {
  document.body.addEventListener('mousedown', () => {
    mouseDown = true;
  });

  document.body.addEventListener('mouseup', () => {
    mouseDown = false;
  });
}