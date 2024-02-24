export default class Player {
  constructor(name = "CPU") {
    this.name = name;
    this.previouslyAttacked = [];
    this.row = null;
    this.col = null;
  }

  randomAttack() {
    let ranRow = Math.floor(Math.random() * 10);
    let ranCol = Math.floor(Math.random() * 10);
    this.setCol(ranCol);
    this.setRow(ranRow);
    let pair = `${ranRow},${ranCol}`;

    while (this.previouslyAttacked.includes(pair)) {
      ranRow = Math.floor(Math.random() * 10);
      ranCol = Math.floor(Math.random() * 10);
      this.setRow(ranRow);
      this.setCol(ranCol);
      pair = `${ranRow},${ranCol}`;
      if (!this.previouslyAttacked.includes(pair)) {
        this.previouslyAttacked.push(pair);
      }
    }
    // return { ranRow, ranCol };
  }

  getRow() {
    return this.row;
  }

  getCol() {
    return this.col;
  }

  setRow(row) {
    this.row = row;
  }

  setCol(col) {
    this.col = col;
  }
}
