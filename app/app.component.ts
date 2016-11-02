import { Component } from '@angular/core';
import { Square } from './square.model';
import { Game } from './game.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="well">
      <h1>Battleship</h1>
    </div>
    <div class="well">
      <table align="center">
        <tr>
          <td></td>
          <td align="center" *ngFor="let foo of dummyArray; let index = index">
            {{index+1}}
          </td>
        </tr>
        <tr *ngFor="let letter of letterArray; let row = index">
          <td align="center">{{letter}}</td>
          <td (click)=fire(myGame.board[row][col],row,col) align="center"
          *ngFor=" let currentSquare of myGame.board[row]; let col = index"
          [class.hit]="myGame.board[row][col].hit"
          [class.ship]="myGame.board[row][col].ship"
          [class.miss]="myGame.board[row][col].miss"
          [class.sunk]="myGame.board[row][col].sunk"
          >
          </td>
        </tr>
      </table>
    </div>
  </div>
  `
})

export class AppComponent {
  public myGame:Game = new Game(10,10);
  public dummyArray = new Array(10);
  public letterArray = ["A","B","C","D","E","F","G","H","I","J"];
  fire(selectedSquare:Square,row: number,col: number){
    var sunkCounter = 0;
    var sunkBuffer:String[] = [];
    if (selectedSquare.ship === true) {
      this.myGame.board[row][col].hit = true;
      for(var i: number = 0; i < this.myGame.boardRows; i++) {
        for(var j: number = 0; j< this.myGame.boardColumns; j++) {
          if(this.myGame.board[i][j].id === selectedSquare.id && this.myGame.board[i][j].hit === true){
            sunkBuffer.push(String(i)+String(j));
            sunkCounter++
          }
        }
      }
      if (sunkCounter == 2 && selectedSquare.id == 0 ||
          sunkCounter == 3 && selectedSquare.id == 1 ||
          sunkCounter == 3 && selectedSquare.id == 2 ||
          sunkCounter == 4 && selectedSquare.id == 3 ||
          sunkCounter == 5 && selectedSquare.id == 4) {
        for (let i = 0; i < sunkBuffer.length; i++) {
          this.myGame.board[parseInt(sunkBuffer[i][0])][parseInt(sunkBuffer[i][1])].sunk = true;
        }
      }
    }
    else{
      this.myGame.board[row][col].miss = true;
    }
  }
}
