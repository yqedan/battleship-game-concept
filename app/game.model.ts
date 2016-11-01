import { Square } from './square.model';

export class Game{
  public board = {};
  constructor(){
    for(var i: number = 0; i < 10; i++) {
      this.board[i] = [];
      for(var j: number = 0; j< 10; j++) {
        this.board[i][j] = new Square();
      }
    }
  }
}
