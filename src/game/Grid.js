import { Cell } from "./Cell";
import config from "./Config";

export class Grid {
  constructor(gridContainer) {
    this.cells = [];
    for (let i = 0; i < config.cellsCount; i++) {
      this.cells.push(
        new Cell(
          gridContainer,
          i % config.gridSize,
          Math.floor(i / config.gridSize)
        )
      );
    }
    this.cellsGroupedByColumn = this.groupCellsByColumn();
    this.cellsGroupedByReversedColumn = this.cellsGroupedByColumn.map((col) =>
      [...col].reverse()
    );
    this.cellsGroupedByRow = this.groupCellsByRow();
    this.cellsGroupedByReversedRow = this.cellsGroupedByRow.map((col) =>
      [...col].reverse()
    );
  }
  getEmptyCell() {
    console.log(this.cells);
    const emptyCells = this.cells.filter((cell) => cell.isEmpty());
    const ind = Math.floor(Math.random() * emptyCells.length);
    return emptyCells[ind];
  }

  groupCellsByColumn() {
    return this.cells.reduce((grCells, cell) => {
      grCells[cell.x] = grCells[cell.x] || [];
      grCells[cell.x][cell.y] = cell;
      return grCells;
    }, []);
  }
  groupCellsByRow() {
    return this.cells.reduce((grCells, cell) => {
      grCells[cell.y] = grCells[cell.y] || [];
      grCells[cell.y][cell.x] = cell;
      return grCells;
    }, []);
  }
}
