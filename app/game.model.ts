import { Square } from './square.model';

export class Game{
  public board = {};
  constructor(){
    for(var i: number = 0; i < 3; i++) {
      this.board[i] = [];
      for(var j: number = 0; j< 3; j++) {
        this.board[i][j] = new Square();
      }
    }
    //2x1 random logic horizontal
    var randomSuccess:boolean = false;
    var randCol = 0;
    var randRow = 0;
    do{
      randCol =  Math.floor(Math.random() * 3);
      randRow =  Math.floor(Math.random() * 3);
      if(randCol+1 < 3 && this.board[randRow][randCol].ship === false && this.board[randRow][randCol+1].ship === false ){
        randomSuccess = true;
      }
    }while(randomSuccess === false);
    this.board[randRow][randCol].ship = true;
    this.board[randRow][randCol+1].ship = true;

    randomSuccess = false;
    do{
      randCol =  Math.floor(Math.random() * 3);
      randRow =  Math.floor(Math.random() * 3);
      if(randCol+1 < 3 && this.board[randRow][randCol].ship === false && this.board[randRow][randCol+1].ship === false ){
        randomSuccess = true;
      }
    }while(randomSuccess === false);
    this.board[randRow][randCol].ship = true;
    this.board[randRow][randCol+1].ship = true;
  }
}
