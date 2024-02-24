import GameBoard from "../classes/GameBoard";

test("GameBoard constructor", () => {
  const gameBoard = new GameBoard();
  const gameBoardExpected = [...new Array(10)].map(() =>
    new Array(10).fill(null),
  );
  expect(gameBoard.createBoard()).toEqual(gameBoardExpected);
});

test("GameBoard place ships method vertical", () => {
  const gameBoard = new GameBoard();
  const row = 0;
  const col = 0;
  gameBoard.placeShip(row, col, gameBoard.ships.PatrolBoat);
  for (let i = row; i < row + gameBoard.ships.PatrolBoat.length; i++) {
    expect(gameBoard.board[i][col]).toBe(gameBoard.ships.PatrolBoat.name);
  }
});

test("GameBoard place ships method horizontal", () => {
  const gameBoard = new GameBoard();
  const row = 0;
  const col = 0;
  gameBoard.placeShip(row, col, gameBoard.ships.PatrolBoat, "horizontal");
  for (let i = col; i < col + gameBoard.ships.PatrolBoat.length; i++) {
    expect(gameBoard.board[row][i]).toBe(gameBoard.ships.PatrolBoat.name);
  }
});

test("GameBoard are all ships sunk method", () => {
  const gameBoard = new GameBoard();
  let allSunk = true;
  Object.values(gameBoard.ships).forEach((ship) => {
    for(let i = 0; i < ship.length; i++) {
      ship.hit();
    }
    if(ship.isSunk() === false) {
      allSunk = false;
    }
  })
  expect(gameBoard.allSunk()).toBeTruthy();
});
