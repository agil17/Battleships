import Ship from "./Ship";

export default class GameBoard {
  constructor() {
    this.board = this.createBoard();
    this.ships = {
      Carrier: new Ship("Carrier", 5),
      Battleship: new Ship("Battleship", 4),
      Destroyer: new Ship("Destroyer", 3),
      Submarine: new Ship("Submarine", 3),
      PatrolBoat: new Ship("PatrolBoat", 2),
    };
  }

  allSunk() {
    const ships = Object.values(this.ships);
    let isAllSunk = true;
    ships.forEach((ship) => {
      if (ship.isSunk() === false) {
        isAllSunk = false;
      }
    });
    return isAllSunk;
  }

  createBoard() {
    const newBoard = [...new Array(10)].map(() => new Array(10).fill(null));
    return newBoard;
  }

  placeShip(row, col, ship, orientation = "vertical") {
    if (row < 0 || row >= this.board.length) {
      throw new Error('Row out of board');
    }
    if (col < 0 || col >= this.board.length) {
      throw new Error('Column out of board');
    }

    const shipLength = ship.length;
    if (orientation === 'vertical') {
      if (row + shipLength > this.board.length) {
        throw new Error('Ship does not fit');
      }
    } else if (col + shipLength > this.board.length) {
      throw new Error('Ship does not fit');
    }

    if (orientation === 'vertical') {
      for (let i = row; i < row + shipLength; i += 1) {
        if (this.board[i][col]) {
          throw new Error('A ship already exists');
        }
      }

      for (let i = row; i < row + shipLength; i += 1) {
        this.board[i][col] = ship.name;
      }
    } else {
      for (let i = col; i < col + shipLength; i += 1) {
        if (this.board[row][i]) {
          throw new Error('A ship already exists');
        }
      }

      for (let i = col; i < col + shipLength; i += 1) {
        this.board[row][i] = ship.name;
      }
    }

    // if (
    //   row < 0 ||
    //   row >= 10 ||
    //   row + ship.length >= 10 ||
    //   col < 0 ||
    //   col >= 10 ||
    //   col + ship.length >= 10
    // ) {
    //   throw new Error("Invalid placement of ship");
    // }
    // if (orientation === "vertical") {
    //   for (let i = row; i < row + ship.length; i++) {
    //     if (this.board[i][col]) {
    //       throw new Error("Invalid ship placement");
    //     }
    //   }
    //   for (let i = row; i < row + ship.length; i++) {
    //     this.board[i][col] = ship.name;
    //   }
    // } else if (orientation === "horizontal") {
    //   for (let i = col; i < col + ship.length; i++) {
    //     if (this.board[row][i]) {
    //       throw new Error("Invalid ship placement");
    //     }
    //   }
    //   for (let i = col; i < col + ship.length; i++) {
    //     this.board[row][i] = ship.name;
    //   }
    // }
  }

  randomlyPlaceShip() {
    const orientation = ["horizonal", "vertical"];
    Object.values(this.ships).forEach((ship) => {
      let placed = false;
      while (!placed) {
        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * 10);
        const dir = orientation[Math.floor(Math.random() * orientation.length)];
        try {
          this.placeShip(row, col, ship, dir);
          placed = true;
        } catch (error) {
          // PlaceShip throws error before placed becomes true and tries again with the same ship
        }
      }
    });
  }
}
