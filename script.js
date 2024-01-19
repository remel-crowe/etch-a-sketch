const Grid = (() => {
  const gridContainer = document.getElementsByClassName("grid-container")[0];

  function create(num) {
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

  function clear() {
    gridContainer.innerHTML = "";
    create(Settings.getSize());
  }

  function changeColour(event) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    if (event.target.classList.contains("grid-square")) {
      if (Settings.getColourMode() === "rainbow") {
        event.target.style.background = `rgb(${r}, ${g}, ${b})`;
      } else if (Settings.getColourMode() === "colour") {
        event.target.style.background = Settings.getColourFromPick();
      } else if (Settings.getColourMode() === "eraser") {
        event.target.style.background = "white";
      }
    }
  }

  return { create, clear };
})();

const Settings = (() => {
  let sizeValue = document.getElementById("sizeValue");
  let sizeSlider = document.getElementById("sizeSlider");
  let colourPicker = document.getElementById("colourPicker");
  let colourButton = document.getElementById("colourButton");
  let rainbowButton = document.getElementById("rainbowButton");
  let eraserButton = document.getElementById("eraserButton");
  let clearButton = document.getElementById("clearButton");
  let colourMode = "rainbow";

  sizeSlider.addEventListener("input", changeSize);
  rainbowButton.addEventListener("click", () => {
    setColourMode("rainbow");
  });

  colourButton.addEventListener("click", () => {
    setColourMode("colour");
  });

  eraserButton.addEventListener("click", () => {
    setColourMode("eraser");
  });

  clearButton.addEventListener("click", Grid.clear);

  function changeSize() {
    let gridSize = sizeSlider.value;
    sizeValue.innerHTML = `${gridSize} x ${gridSize}`;
    Grid.clear();
    Grid.create(gridSize);
  }

  function getColourFromPick() {
    return colourPicker.value;
  }

  function setColourMode(mode) {
    colourMode = mode;
  }

  function getColourMode() {
    return colourMode;
  }

  function getSize() {
    return sizeSlider.value;
  }

  return { setColourMode, getColourMode, getSize, getColourFromPick };
})();

// app.js
window.onload = () => {
  Grid.create(16);
};
