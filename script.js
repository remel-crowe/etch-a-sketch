const DEFAULT_SIZE = 16;

let gridContainer = document.getElementsByClassName("grid-container")[0];
let sizeValue = document.getElementById("sizeValue");
let sizeSlider = document.getElementById("sizeSlider");
let colourButton = document.getElementById("colourButton");
let rainbowButton = document.getElementById("rainbowButton");
let eraserButton = document.getElementById("eraserButton");
let clearButton = document.getElementById("clearButton");
let colourMode;

sizeSlider.addEventListener("input", handleChange);
rainbowButton.addEventListener("click", () => {
  colourMode = "rainbow";
});
clearButton.addEventListener("click", clearGrid);

function handleChange() {
  let gridSize = sizeSlider.value;
  sizeValue.innerHTML = `${gridSize} x ${gridSize}`;
  clearGrid();
  createGrid(gridSize);
}
function createGrid(num) {
  gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  let gridSquare;
  for (let i = 0; i < num * num; i++) {
    gridSquare = document.createElement("div");
    gridSquare.className = "grid-square";
    gridContainer.appendChild(gridSquare);
  }
  gridContainer.removeEventListener("mouseover", changeColour);
  gridContainer.addEventListener("mouseover", changeColour);
}

function changeColour(event) {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  if (event.target.classList.contains("grid-square")) {
    if (colourMode === "rainbow") {
      event.target.style.background = `rgb(${r}, ${g}, ${b})`;
    } else if (colourMode === "eraser") {
      event.target.style.background = "white";
    } else {
    }
  }
}

function clearGrid() {
  gridContainer.innerHTML = "";
  createGrid(sizeSlider.value);
}

window.onload = () => {
  createGrid(DEFAULT_SIZE);
  colourMode = "rainbow";
};
