class Game{
    constructor(player1Name, player2Name){
        this.boardState = [[], [], [], [], [], [], []]
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.playerTurn = "black";
        this.winnerNumber = 0;
        
    }

    getName(){
        if(this.winnerNumber === 0){
            return `${this.player1Name} vs ${this.player2Name}`
        } else if(this.winnerNumber === 3){
            return `${this.player1Name} ties with ${this.player2Name}`
        } else if(this.winnerNumber === 1){
            return `${this.player1Name} Wins!!!`
        } else if(this.winnerNumber === 2){
            return `${this.player2Name} Wins!!!`
        }
    }

    changePlayerTurn() {
        let board = document.getElementById("click-targets")
        board.classList.remove(this.playerTurn);
        if (this.playerTurn === "black") {
            this.playerTurn = "red";
        } else {
            this.playerTurn = "black";
        }
        board.classList.add(this.playerTurn);
    }
    move(columnNumber) {
        this.boardState[columnNumber].push(this.playerTurn);
        const rowNumber = 6 - this.boardState[columnNumber].length
        const newToken = document.createElement("div");
        newToken.classList.add(this.playerTurn, "token");
        const square = document.getElementById(`square-${rowNumber}-${columnNumber}`);
        square.appendChild(newToken)
    }

    checkColumnForFull(columnNumber){
        if(this.boardState[columnNumber].length >= 6){
            document.getElementById(`column-${columnNumber}`).classList.add("full")
        }
    }
    checkTie(){
        if(this.boardState.every(el => {return el.length >= 6})){
            this.winnerNumber = 3;
        }
    }

    checkColumnWin(columnNumber){
        if(this.boardState[columnNumber].length >= 4){
            const chunk = this.boardState[columnNumber].slice((this.boardState[columnNumber].length - 4));
            if(chunk.every(el => el === this.playerTurn)){
                if(this.playerTurn === "red"){
                    this.winnerNumber = 1;
                } else{
                    this.winnerNumber = 2;
                }
                for(let i=0; i<7; i++){
                    document.getElementById(`column-${i}`).classList.add("full")
                }
            }
        }
    }

    checkRowWin(columnNumber){
        let rowNumber = this.boardState[columnNumber].length;
        let win = 0;
        for (let i = columnNumber - 3; i < columnNumber+1; i++){
            for(let j=0; j<4; j++){
                if (this.playerTurn === this.boardState[i+j][rowNumber]){
                    console.log("row win")
                }
            }
        }
        
    }
}

export {Game}