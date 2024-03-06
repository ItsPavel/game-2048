export class Cell {
  constructor(gridContainer, x, y) {
    this.x = x;
    this.y = y;
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gridContainer.append(cell);
  }
}
