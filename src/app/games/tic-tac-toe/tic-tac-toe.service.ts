import { Injectable } from "@angular/core";
import { Grid } from "./interfaces/tic-tac-toe.interface";

@Injectable()
export class TicTacService {
    winnerName: string | undefined;
    cells: Grid;
    x: string;
    o: string;
    isVictory: boolean;
    isEnded: boolean;
  
    constructor() {
      this.cells = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ];
      this.x = 'X';
      this.o = 'O';
      this.isVictory = false;
      this.isEnded = false;
    }
  
    makeMove(row: number, col: number): void {
      if (!this.cells[row][col] && !this.isEnded) {
        this.cells[row][col] = this.x;
        this.checkWinner();
        if (!this.isEnded) {
          this.randomO();
          this.checkWinner();
        }
      }
    }
  
    randomO(): void {
      const availableCells: { row: number, col: number }[] = [];
      this.cells.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (cell === "") {
            availableCells.push({ row: rowIndex, col: colIndex });
          }
        });
      });
  
      const totalCells: number = availableCells.length;
      if (totalCells === 0) {
        this.isEnded = true;
        this.winner("No one");
        return;
      }
  
      const randomIndex: number = Math.floor(Math.random() * totalCells);
      const { row, col } = availableCells[randomIndex];
      this.cells[row][col] = this.o;
    }
  
    checkWinner(): void {
      const cells = this.cells;
  
      // Check horizontal lines
      for (let row = 0; row < 3; row++) {
        if (cells[row][0] && cells[row][0] === cells[row][1] && cells[row][1] === cells[row][2]) {
          this.isVictory = true;
          this.winner(cells[row][0]);
          return;
        }
      }
  
      // Check vertical lines
      for (let col = 0; col < 3; col++) {
        if (cells[0][col] && cells[0][col] === cells[1][col] && cells[1][col] === cells[2][col]) {
          this.isVictory = true;
          this.winner(cells[0][col]);
          return;
        }
      }
  
      // Check diagonal lines
      if (cells[0][0] && cells[0][0] === cells[1][1] && cells[1][1] === cells[2][2]) {
        this.isVictory = true;
        this.winner(cells[0][0]);
        return;
      }
  
      if (cells[0][2] && cells[0][2] === cells[1][1] && cells[1][1] === cells[2][0]) {
        this.isVictory = true;
        this.winner(cells[0][2]);
        return;
      }
  
      // Check for draw
      if (!this.cells.flat().includes("")) {
        this.isEnded = true;
        this.winner("No one");
      }
    }
  
    winner(player: string): void {
      this.isEnded = true;
      // You can handle the winner logic here, like showing a modal or resetting the game
      // For simplicity, we'll log to console
      this.winnerName = player;
      console.log(`Winner is ${player}`);
    }
  
    restartGame(): void {
      this.cells = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ];
      this.isVictory = false;
      this.isEnded = false;
      this.winnerName = "";
    }
}