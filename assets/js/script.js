const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
  const column = document.createElement('div');
  for (let j = 0; j < 16; j++) {
      const div = document.createElement('div');
      div.style.cssText = 'height: 6.25vh; width: 6.25vw; border: 1px solid black;';
      column.appendChild(div);
  }
  container.appendChild(column);
}