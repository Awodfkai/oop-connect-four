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
        if(this.boardState.every(el => {return el.length >= 6})){
            this.winnerNumber = 3;
        }
    }
}

export {Game}