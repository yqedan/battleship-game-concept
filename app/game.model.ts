import { Square } from './square.model';

export class Game{
  public board = {};
  constructor(public boardRows:number, public boardColumns:number){
    for(var i: number = 0; i < boardRows; i++) {
      this.board[i] = [];
      for(var j: number = 0; j< boardColumns; j++) {
        this.board[i][j] = new Square();
      }
    }
    this.generate2by1();
    this.generate3by1();
    this.generate3by1();
    this.generate4by1();
    this.generate5by1();
  }
  generate2by1(){
    var horizontalOrVertical:boolean = !(Math.floor(Math.random() * 2));
    var randomSuccess:boolean = false;
    var randCol = 0;
    var randRow = 0;
    if(horizontalOrVertical){
      //2x1 random logic horizontal
      do{
        randCol =  Math.floor(Math.random() * this.boardColumns);
        randRow =  Math.floor(Math.random() * this.boardRows);
        if(randCol + 1 < this.boardColumns
          && this.board[randRow][randCol].ship === false
          && this.board[randRow][randCol+1].ship === false ){
          randomSuccess = true;
        }
      }while(randomSuccess === false);
      this.board[randRow][randCol].ship = true;
      this.board[randRow][randCol+1].ship = true;
    }
    else{
      //2x1 random logic vertical
      randomSuccess = false;
      do{
        randCol =  Math.floor(Math.random() * this.boardColumns);
        randRow =  Math.floor(Math.random() * this.boardRows);
        if(randRow + 1 < this.boardRows
          && this.board[randRow][randCol].ship === false
          && this.board[randRow+1][randCol].ship === false ){
          randomSuccess = true;
        }
      }while(randomSuccess === false);
      this.board[randRow][randCol].ship = true;
      this.board[randRow+1][randCol].ship = true;
    }
  }

  generate3by1(){
    var horizontalOrVertical:boolean = !(Math.floor(Math.random() * 2));
    var randomSuccess:boolean = false;
    var randCol = 0;
    var randRow = 0;
    if(horizontalOrVertical){
      //3x1 random logic horizontal
      do{
        randCol =  Math.floor(Math.random() * this.boardColumns);
        randRow =  Math.floor(Math.random() * this.boardRows);
        if(randCol + 2 < this.boardColumns
          && this.board[randRow][randCol].ship === false
          && this.board[randRow][randCol+1].ship === false
          && this.board[randRow][randCol+2].ship === false ){
          randomSuccess = true;
        }
      }while(randomSuccess === false);
      this.board[randRow][randCol].ship = true;
      this.board[randRow][randCol+1].ship = true;
      this.board[randRow][randCol+2].ship = true;
    }
    else{
      //3x1 random logic vertical
      randomSuccess = false;
      do{
        randCol =  Math.floor(Math.random() * this.boardColumns);
        randRow =  Math.floor(Math.random() * this.boardRows);
        if(randRow + 2 < this.boardRows
          && this.board[randRow][randCol].ship === false
          && this.board[randRow+1][randCol].ship === false
          && this.board[randRow+2][randCol].ship === false ){
          randomSuccess = true;
        }
      }while(randomSuccess === false);
      this.board[randRow][randCol].ship = true;
      this.board[randRow+1][randCol].ship = true;
      this.board[randRow+2][randCol].ship = true;
    }
  }

  generate4by1(){
    var horizontalOrVertical:boolean = !(Math.floor(Math.random() * 2));
    var randomSuccess:boolean = false;
    var randCol = 0;
    var randRow = 0;
    if(horizontalOrVertical){
      //4x1 random logic horizontal
      do{
        randCol =  Math.floor(Math.random() * this.boardColumns);
        randRow =  Math.floor(Math.random() * this.boardRows);
        if(randCol + 3 < this.boardColumns
          && this.board[randRow][randCol].ship === false
          && this.board[randRow][randCol+1].ship === false
          && this.board[randRow][randCol+2].ship === false
          && this.board[randRow][randCol+3].ship === false ){
          randomSuccess = true;
        }
      }while(randomSuccess === false);
      this.board[randRow][randCol].ship = true;
      this.board[randRow][randCol+1].ship = true;
      this.board[randRow][randCol+2].ship = true;
      this.board[randRow][randCol+3].ship = true;
    }
    else{
      //4x1 random logic vertical
      randomSuccess = false;
      do{
        randCol =  Math.floor(Math.random() * this.boardColumns);
        randRow =  Math.floor(Math.random() * this.boardRows);
        if(randRow + 3 < this.boardRows
          && this.board[randRow][randCol].ship === false
          && this.board[randRow+1][randCol].ship === false
          && this.board[randRow+2][randCol].ship === false
          && this.board[randRow+3][randCol].ship === false ){
          randomSuccess = true;
        }
      }while(randomSuccess === false);
      this.board[randRow][randCol].ship = true;
      this.board[randRow+1][randCol].ship = true;
      this.board[randRow+2][randCol].ship = true;
      this.board[randRow+3][randCol].ship = true;
    }
  }

  generate5by1(){
    var horizontalOrVertical:boolean = !(Math.floor(Math.random() * 2));
    var randomSuccess:boolean = false;
    var randCol = 0;
    var randRow = 0;
    if(horizontalOrVertical){
      //5x1 random logic horizontal
      do{
        randCol =  Math.floor(Math.random() * this.boardColumns);
        randRow =  Math.floor(Math.random() * this.boardRows);
        if(randCol + 4 < this.boardColumns
          && this.board[randRow][randCol].ship === false
          && this.board[randRow][randCol+1].ship === false
          && this.board[randRow][randCol+2].ship === false
          && this.board[randRow][randCol+3].ship === false
          && this.board[randRow][randCol+4].ship === false ){
          randomSuccess = true;
        }
      }while(randomSuccess === false);
      this.board[randRow][randCol].ship = true;
      this.board[randRow][randCol+1].ship = true;
      this.board[randRow][randCol+2].ship = true;
      this.board[randRow][randCol+3].ship = true;
      this.board[randRow][randCol+4].ship = true;
    }
    else{
      //5x1 random logic vertical
      randomSuccess = false;
      do{
        randCol =  Math.floor(Math.random() * this.boardColumns);
        randRow =  Math.floor(Math.random() * this.boardRows);
        if(randRow + 4 < this.boardRows
          && this.board[randRow][randCol].ship === false
          && this.board[randRow+1][randCol].ship === false
          && this.board[randRow+2][randCol].ship === false
          && this.board[randRow+3][randCol].ship === false
          && this.board[randRow+4][randCol].ship === false ){
          randomSuccess = true;
        }
      }while(randomSuccess === false);
      this.board[randRow][randCol].ship = true;
      this.board[randRow+1][randCol].ship = true;
      this.board[randRow+2][randCol].ship = true;
      this.board[randRow+3][randCol].ship = true;
      this.board[randRow+4][randCol].ship = true;
    }
  }
}
