import "./styles/main.css";
import { Grid } from "./game/Grid";
import { Tile } from "./game/Tile";

const gridContainer = document.querySelector(".container");

const grid = new Grid(gridContainer);
grid.getEmptyCell().linkTile(new Tile(gridContainer));
grid.getEmptyCell().linkTile(new Tile(gridContainer));
setupInputOnce();

function setupInputOnce() {
  window.addEventListener("keydown", handleEvent, { once: true });
}

function handleEvent(e) {
  switch (e.key) {
    case "ArrowUp":
      moveUp();
      break;
    case "ArrowDown":
      moveDown();
      break;
    case "ArrowLeft":
      moveLeft();
      break;
    case "ArrowRight":
      moveRight();
      break;
    default:
      setupInputOnce();
      return;
  }
  setupInputOnce();
}

function moveUp() {
  slideTiles(grid.cellsGroupedByColumn);
}

function moveDown() {
  slideTiles(grid.cellsGroupedByReversedColumn);
}

function moveLeft() {
  slideTiles(grid.cellsGroupedByRow);
}

function moveRight() {
  slideTiles(grid.cellsGroupedByReversedRow);
}

function slideTiles(cellsGroupedByColumn) {
  cellsGroupedByColumn.forEach((group) => slideTilesInGroup(group));
  grid.cells.forEach((cell) => {
    cell.hasTileForMerge() && cell.mergeTiles();
  });
}

function slideTilesInGroup(group) {
  for (let i = 1; i < group.length; i++) {
    if (group[i].isEmpty()) {
      continue;
    }
    const cellWithTile = group[i];

    let targetCell = null;
    let j = i - 1;

    while (j >= 0 && group[j].canAccept(cellWithTile.linkedTile)) {
      targetCell = group[j];
      j--;
    }
    if (!targetCell) {
      continue;
    }
    if (targetCell.isEmpty()) {
      targetCell.linkTile(cellWithTile.linkedTile);
    } else {
      targetCell.linkTileForMerge(cellWithTile.linkedTile);
    }

    cellWithTile.unlinkTile();
  }
}
