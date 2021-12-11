import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

  }
  player1 = true;
  
  boxes = ['1','2','3','4','5','6','7','8','9'];
  result = [[1,2,3], [4,5,6], [7,8,9], [1,5,9], [3,5,7], [1,4,7], [2,5,7], [3,6,9]];
  winner = '';
  test :string[]=['','','','','','','','',''];
  click(box: any) {
    if (this.player1) {
      this.boxes[box-1] = 'X';
      this.test[box-1] = 'X';
    }
    else {
      this.boxes[box-1] = 'O';
      this.test[box-1] = 'O'
    }
    this.player1 = !this.player1;

    this.result.forEach(res => {
        if(this.boxes[res[0]-1] === 'X' && this.boxes[res[1]-1] == 'X' && this.boxes[res[2]-1] === 'X' ) {
            this.winner = "Player 1 WINS!!!"
            setTimeout(() => {
              this.reset();
            }, 3000);
        } else if (this.boxes[res[0]-1] === 'O' && this.boxes[res[1]-1] == 'O' && this.boxes[res[2]-1] === 'O' ) {
          this.winner = "Player 2 WINS!!!"
          setTimeout(() => {
            this.reset();
          }, 3000);
        }
    });
    
    if(!this.test.includes('')) {
      this.winner = 'Match Drawn!!'; 
      setTimeout(() => {
        this.reset();
      }, 3000);
    }
  }

  reset() {
    this.boxes = ['1','2','3','4','5','6','7','8','9'];
    this.player1 = true;
    this.winner = '';
    this.test = ['','','','','','','','',''];
  }
}
