export class Cell {
  constructor(gridContainer, x, y) {
    this.x = x;
    this.y = y;
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gridContainer.append(cell);
  }
  linkTile(tile) {
    tile.setXY(this.x, this.y);
    this.linkedTile = tile;
  }
  isEmpty() {
    return !this.linkedTile;
  }
  unlinkTile() {
    this.linkedTile = null;
  }
  unlinkTileForMerge() {
    this.linkTileForMerge = null;
  }
  linkTileForMerge(tile) {
    tile.setXY(this.x, this.y);
    this.linkedTileForMerge = tile;
  }
  hasTileForMerge() {
    return !!this.linkedTileForMerge;
  }
  canAccept(newTile) {
    return (
      this.isEmpty() ||
      (!this.hasTileForMerge() && this.linkedTile.value === newTile.value)
    );
  }
  mergeTiles() {
    this.linkedTile.setValue(
      this.linkedTile.value + this.linkedTileForMerge.value
    );
    this.linkedTileForMerge.removeFromDOM();
    this.unlinkTileForMerge();
  }
}
