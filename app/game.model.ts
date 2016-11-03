import { Square } from './square.model';

export class Game{
  public board = {};
  public attempts:number = 0;
  public hitShip: number = 0;

  constructor(public boardRows:number, public boardColumns:number){
    for (var i: number = 0; i < boardRows; i++) {
      this.board[i] = [];
      for (var j: number = 0; j< boardColumns; j++) {
        this.board[i][j] = new Square();
      }
    }
    this.generateShip(0,2); //2x1
    this.generateShip(1,3); //3x1
    this.generateShip(2,3); //3x1
    this.generateShip(3,4); //4x1
    this.generateShip(4,5); //5x1
  }

  fire(selectedSquare:Square,row: number,col: number){
    if (selectedSquare.hit === false && selectedSquare.miss === false){
      this.attempts++;
      if (selectedSquare.ship === true) {
        this.hitShip++;
      }
    }
    var sunkCounter:number = 0;
    var sunkBuffer:String[] = [];
    if (selectedSquare.ship === true) {
      this.board[row][col].hit = true;
      for (var i: number = 0; i < this.boardRows; i++) {
        for (var j: number = 0; j< this.boardColumns; j++) {
          if(this.board[i][j].id === selectedSquare.id && this.board[i][j].hit === true){
            sunkBuffer.push(String(i)+String(j));
            sunkCounter++;
          }
        }
      }
      if (sunkCounter == 2 && selectedSquare.id == 0 ||
          sunkCounter == 3 && selectedSquare.id == 1 ||
          sunkCounter == 3 && selectedSquare.id == 2 ||
          sunkCounter == 4 && selectedSquare.id == 3 ||
          sunkCounter == 5 && selectedSquare.id == 4) {
        for (let i = 0; i < sunkBuffer.length; i++) {
          this.board[parseInt(sunkBuffer[i][0])][parseInt(sunkBuffer[i][1])].sunk = true;
        }
      }
    }
    else {
      this.board[row][col].miss = true;
    }
    if (this.hitShip === 17) {
      setTimeout(function(){ alert("you win"); }, .01);
    }
  }

  generateShip(id:number,size:number){
    var horizontalOrVertical:boolean = !(Math.floor(Math.random() * 2));
    var randomSuccess:boolean = true;
    var randCol = 0;
    var randRow = 0;
    if (horizontalOrVertical) {
      do{
        randCol = Math.floor(Math.random() * this.boardColumns);
        randRow = Math.floor(Math.random() * this.boardRows);
        randomSuccess = true;
        if (randCol + (size-1) < this.boardColumns) {
          for (let i = 0; i < size; i++) {
            if (this.board[randRow][randCol+i].ship) {
              randomSuccess = false;
            }
          }
        }else {
          randomSuccess = false;
        }
      }while(randomSuccess === false)
      for (let i = 0; i < size; i++) {
        this.board[randRow][randCol+i].ship = true;
        this.board[randRow][randCol+i].id = id;
      }
    }
    else {
      do{
        randCol = Math.floor(Math.random() * this.boardColumns);
        randRow = Math.floor(Math.random() * this.boardRows);
        randomSuccess = true;
        if (randRow + (size-1) < this.boardRows) {
          for (let i = 0; i < size; i++) {
            if (this.board[randRow+i][randCol].ship) {
              randomSuccess = false;
            }
          }
          }else {
            randomSuccess = false;
          }
      }while(randomSuccess === false)
      for (let i = 0; i < size; i++) {
        this.board[randRow+i][randCol].ship = true;
        this.board[randRow+i][randCol].id = id;
      }
    }
  }
}
