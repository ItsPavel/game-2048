export class Tile {
  constructor(gridContainer) {
    this.tileEl = document.createElement("div");
    this.tileEl.classList.add("tile");
    this.setValue(Math.random() >= 0.5 ? 2 : 4);

    gridContainer.append(this.tileEl);
  }
  setXY(x, y) {
    this.x = x;
    this.y = y;
    this.tileEl.style.setProperty("--сoor-x", x);
    this.tileEl.style.setProperty("--coor-y", y);
  }
  setValue(value) {
    this.value = value;
    this.tileEl.textContent = this.value;
    const bgTile = 100 - Math.log2(this.value) * 9;
    const textColor = bgTile < 50 ? 90 : 10;
    this.tileEl.style.setProperty("--bg-tile", `${bgTile}%`);
    this.tileEl.style.setProperty("--text-color-tile", `${textColor}%`);
  }
  removeFromDOM() {
    this.tileEl.remove();
  }
}
