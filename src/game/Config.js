const config = {
  gridSize: 4,
  keys: ["ArrowUP", "ArrowDown", "ArrowLeft", "ArrowRight"],
  get cellsCount() {
    return this.gridSize * this.gridSize;
  },
};

export default config;
