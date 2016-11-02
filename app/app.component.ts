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
    if (selectedSquare.ship === true) {
      this.myGame.board[row][col].hit = true;
    }
    else{
      this.myGame.board[row][col].miss = true;
    }
  }
}
