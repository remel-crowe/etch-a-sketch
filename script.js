let gridContainer = document.getElementsByClassName("grid-container")[0];

function createGrid(num) {
  gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  var gridSquare;
  for (let i = 0; i < num * num; i++) {
    gridSquare = document.createElement("div");
    gridSquare.className = "grid-square";
    gridContainer.appendChild(gridSquare);
  }
}

function clearGrid() {
  while (gridContainer.lastElementChild) {
    gridContainer.removeChild(gridContainer.lastElementChild);
  }
}

let btn = document.getElementsByClassName("grid-scale")[0];
btn.addEventListener("click", () => {
  let num = parseInt(prompt("How big do you want the grid to be?"));
  clearGrid();
  createGrid(num);
});

createGrid(16);
