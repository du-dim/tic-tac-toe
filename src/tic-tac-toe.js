class TicTacToe {
    constructor() {  
        this.won = false;
        this.val;
        this.row;
        this.col;        
        this.mtr = [Array(3).fill(null), Array(3).fill(null), Array(3).fill(null)];
        this.fin = 0;        
    }
  
    getCurrentPlayerSymbol() {         
        return (this.fin % 2 === 0)  ? 'x': 'o';                    
    }
         
    nextTurn(row, col) { 
        this.row = row;
        this.col = col;
           
        if ((this.fin % 2 > 0)&&(this.mtr[row][col] === null)) { 
            this.val = 'o'; 
        }
        else if ((this.fin % 2 === 0)&&(this.mtr[row][col] === null))  { 
            this.val = 'x';
        }
        else  { 
            this.val = this.mtr[row][col];
        }

        this.mtr[this.row][this.col] = this.val;                
         
        this.fin = this.mtr.map(b => b.map(a => (a === 'x')||(a === 'o') ? 1 : 0).reduce((sum, a) => sum + a)).reduce((sum, a) => sum + a); 
        this.getWinner();         
    }   

    isFinished() {    
        return ((this.fin === 9) || (this.won === true)) ? true : false;
    }

    getWinner() {
        let j = 0;
        const win = ['x', 'o'];
        while (j < 2) {
            for (let i = 0; i < 3; i++) {
                if ((this.mtr[i][0] === win[j] && this.mtr[i][1] === win[j] && this.mtr[i][2] === win[j]) ||
                    (this.mtr[0][i] === win[j] && this.mtr[1][i] === win[j] && this.mtr[2][i] === win[j]) || 
                    (this.mtr[0][0] === win[j] && this.mtr[1][1] === win[j] && this.mtr[2][2] === win[j]) ||
                    (this.mtr[2][0] === win[j] && this.mtr[1][1] === win[j] && this.mtr[0][2] === win[j])) {
                        this.won = true;
                        return win[j];
                }
                else false;                                      
            }
            j++; 
        }
        return null;
    }

    noMoreTurns() {        
        return this.fin === 9 ? true : false;
    }

    isDraw() {
        return ((this.won === false) && (this.fin === 9)) ? true: false;         
    }

    getFieldValue(r, c) {
        return this.mtr[r][c];
    }    
}

module.exports = TicTacToe;
