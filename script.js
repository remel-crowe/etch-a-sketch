let gridContainer = document.getElementsByClassName("grid-container")[0];
let sizeValue = document.getElementById("sizeValue");
let sizeSlider = document.getElementById("sizeSlider");
let colourButton = document.getElementById("colourButton");
let rainbowButton = document.getElementById("rainbowButton");
let colours = ["green", "red", "blue", "pink", "yellow", "orange", "black"];

function handleChange() {
  let gridSize = sizeSlider.value;
  sizeValue.innerHTML = `${gridSize} x ${gridSize}`;
  clearGrid();
  createGrid(gridSize);
}

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

sizeSlider.addEventListener("change", handleChange);

gridContainer.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("grid-square")) {
    event.target.style.background =
      colours[Math.floor(Math.random() * colours.length)];
  }
});
