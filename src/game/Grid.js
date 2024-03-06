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
    console.log(this.cells);
  }
}
