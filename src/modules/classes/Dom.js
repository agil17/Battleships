import GameBoard from "./GameBoard";
import Player from "./Player";

export default class Dom {
  static players = [new Player("Player"), new Player()];

  constructor() {
    this.shipIndex = 0;
    this.playerGameBoard = new GameBoard();
    this.cpuGameBoard = new GameBoard();
    this.ships = Object.values(this.playerGameBoard.ships);
    this.gameOver = false;
  }

  initializeDom() {
    this.createPlayerContainer();
    this.createCpuContainer();
    this.addEventListenerToDirBtn();
    this.addEventListenerToResetBtn();
  }

  addEventListenerToCpuShips() {
    const cpuSquares = document.querySelectorAll(".cpu-square");
    cpuSquares.forEach((square) => {
      square.addEventListener("click", (e) => {
        this.attackCpuShipsEventListener(e);
      });
    });
  }

  addEventListenerToDirBtn() {
    const shipDirBtn = document.querySelector(".ship-dir-btn");
    shipDirBtn.addEventListener("click", this.changeDirectionEvent);
  }

  addEventListenerToResetBtn() {
    const reset = document.querySelector(".reset-game");
    // reset.addEventListener("click", () => {
    //   this.shipIndex = 0;
    //   this.gameOver = false;
    //   this.playerGameBoard = new GameBoard();
    //   this.cpuGameBoard = new GameBoard();
    //   this.initializeDom();
    // });
    reset.addEventListener("click", () => {this.resetGameEventListener(this)});
  }

  changeDirectionEvent() {
    const shipDirBtn = document.querySelector(".ship-dir-btn");
    shipDirBtn.textContent =
      shipDirBtn.textContent === "vertical" ? "horizontal" : "vertical";
  }

  attackCpuShipsEventListener(e) {
    const row = parseInt(e.target.dataset.row);
    const col = parseInt(e.target.dataset.col);
    const gameMessage = document.querySelector(".game-message");

    if (
      this.cpuGameBoard.board[row][col] &&
      this.cpuGameBoard.board[row][col] !== "hit" &&
      this.cpuGameBoard.board[row][col] !== "miss"
    ) {
      // console.log(this.cpuGameBoard.board[row][col]);
      this.cpuGameBoard.ships[this.cpuGameBoard.board[row][col]].hit();
      // console.log(this.cpuGameBoard.ships[this.cpuGameBoard.board[row][col]]);
      gameMessage.textContent = "CPU SHIP WAS HIT!";
      this.cpuGameBoard.board[row][col] = "hit";
      // console.log("CPU", this.cpuGameBoard.board);
      if (this.cpuGameBoard.allSunk()) {
        this.gameOver = true;
        gameMessage.textContent = "PLAYER HAS WON!";
      }
      this.renderCpuBoard();
      

      Dom.players[1].randomAttack();
      const ranRow = Dom.players[1].getRow();
      const ranCol = Dom.players[1].getCol();
      if (this.playerGameBoard.board[ranRow][ranCol]) {
        this.playerGameBoard.board[ranRow][ranCol] = "hit";
        // console.log("Player", this.playerGameBoard.board);
        if (this.playerGameBoard.allSunk()) {
          this.gameOver = true;
          gameMessage.textContent = "CPU HAS WON!";
        }
        this.renderPlayerBoard();
      } else {
        this.playerGameBoard.board[ranRow][ranCol] = "miss";
        // console.log("Player", this.playerGameBoard.board);
        this.renderPlayerBoard();
      }
    } else {
      gameMessage.textContent = "MISS!";
      this.cpuGameBoard.board[row][col] = "miss";
      // console.log("CPU", this.cpuGameBoard.board);
      this.renderCpuBoard();
      Dom.players[1].randomAttack();
      const ranRow = Dom.players[1].getRow();
      const ranCol = Dom.players[1].getCol();
      if (this.playerGameBoard.board[ranRow][ranCol]) {
        this.playerGameBoard.board[ranRow][ranCol] = "hit";
        // console.log("Player", this.playerGameBoard.board);
        this.renderPlayerBoard();
      } else {
        this.playerGameBoard.board[ranRow][ranCol] = "miss";
        // console.log("Player", this.playerGameBoard.board);
        this.renderPlayerBoard();
      }
    }
  }

  createCpuContainer() {
    const playerContainers = document.querySelector(".player-boards-container");
    const cpuContainer = document.createElement("div");
    cpuContainer.classList.add("cpu-container");
    playerContainers.appendChild(cpuContainer);
    this.createCpuHeader();
    const cpuBoard = document.createElement("div");
    cpuBoard.classList.add("cpu-board");
    cpuContainer.appendChild(cpuBoard);
    this.renderCpuBoard();
  }

  createPlayerContainer() {
    const playerContainers = document.querySelector(".player-boards-container");
    while (playerContainers.firstChild) {
      playerContainers.removeChild(playerContainers.firstChild);
    }
    const playerContainer = document.createElement("div");
    playerContainer.classList.add("player-container");
    playerContainers.appendChild(playerContainer);
    this.createPlayerHeader();
    const playerBoard = document.createElement("div");
    playerBoard.classList.add("player-board");
    playerContainer.appendChild(playerBoard);
    this.renderPlayerBoard();
  }

  createCpuHeader() {
    const cpuContainer = document.querySelector(".cpu-container");
    const cpuHeader = document.createElement("h1");
    cpuHeader.textContent = "Cpu Board";
    cpuContainer.appendChild(cpuHeader);
  }

  createPlayerHeader() {
    const playerContainer = document.querySelector(".player-container");
    const playerHeader = document.createElement("h1");
    playerHeader.textContent = "Player Board";
    playerContainer.appendChild(playerHeader);
  }

  placePlayerShipsEventListener(e) {
    const row = parseInt(e.target.dataset.row);
    const col = parseInt(e.target.dataset.col);
    const orientation = document.querySelector(".ship-dir-btn").textContent;
    const ship = this.ships[this.shipIndex];
    try {
      this.playerGameBoard.placeShip(row, col, ship, orientation);
      this.shipIndex++;
      this.renderPlayerBoard();
      if (this.shipIndex >= 5) {
        this.cpuGameBoard.randomlyPlaceShip();
        // console.log(this.cpuGameBoard.board);
        const gameMessage = document.querySelector(".game-message");
        gameMessage.textContent = "Begin Game!";
        this.addEventListenerToCpuShips();
      }
    } catch (error) {
      console.log(error);
    }
  }

  renderCpuBoard() {
    const cpuBoard = document.querySelector(".cpu-board");
    while (cpuBoard.firstChild) {
      cpuBoard.removeChild(cpuBoard.firstChild);
    }
    for (let i = 0; i < this.cpuGameBoard.board.length; i++) {
      for (let j = 0; j < this.cpuGameBoard.board[i].length; j++) {
        const square = document.createElement("button");
        square.classList.add("cpu-square");
        square.dataset.row = i;
        square.dataset.col = j;
        if (this.cpuGameBoard.board[i][j] !== null) {
          if (this.cpuGameBoard.board[i][j] === "hit") {
            square.classList.add("hit");
          } else if (this.cpuGameBoard.board[i][j] === "miss") {
            square.classList.add("miss");
          } else {
            if (this.shipIndex >= 5) {
              square.addEventListener("click", (e) => {
                this.attackCpuShipsEventListener(e);
              });
            }
            square.classList.add("ship");
          }
        } else if (this.shipIndex >= 5 && this.gameOver === false) {
          square.addEventListener("click", (e) => {
            this.attackCpuShipsEventListener(e);
          });
        }
        cpuBoard.appendChild(square);
      }
    }
  }

  renderPlayerBoard() {
    const playerBoard = document.querySelector(".player-board");
    while (playerBoard.firstChild) {
      playerBoard.removeChild(playerBoard.firstChild);
    }
    for (let i = 0; i < this.playerGameBoard.board.length; i++) {
      for (let j = 0; j < this.playerGameBoard.board[i].length; j++) {
        const square = document.createElement("button");
        square.classList.add("player-square");
        square.dataset.row = i;
        square.dataset.col = j;
        if (this.playerGameBoard.board[i][j] !== null) {
          if (this.playerGameBoard.board[i][j] === "hit") {
            square.classList.add("hit");
          } else if (this.playerGameBoard.board[i][j] === "miss") {
            square.classList.add("miss");
          } else {
            square.classList.add("ship");
          }
        } else if (this.shipIndex < 5) {
          square.addEventListener("click", (e) => {
            this.placePlayerShipsEventListener(e);
          });
        }
        playerBoard.appendChild(square);
      }
    }
  }

  resetGameEventListener(dom) {
    this.shipIndex = 0;
    this.gameOver = false;
    this.playerGameBoard = new GameBoard();
    this.cpuGameBoard = new GameBoard();
    dom.initializeDom();
  }
}
