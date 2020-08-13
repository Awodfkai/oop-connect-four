class Game{
    constructor(player1Name, player2Name){
        this.boardState = [[], [], [], [], [], [], []]
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.playerTurn = "black";
        
    }

    getName(){
        return `${this.player1Name} vs ${this.player2Name}`
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
    move(e) {
        const t = e.target;
        //get last digit for column number
        const columnNumber = Number(t.id[t.id.length - 1])
        this.boardState[columnNumber].push(this.playerTurn);
        const rowNumber = 6 - this.boardState[columnNumber].length
        const newToken = document.createElement("div");
        newToken.classList.add(this.playerTurn, "token");
        const square = document.getElementById(`square-${rowNumber}-${columnNumber}`);
        square.appendChild(newToken)
    }
    playerClick(e){
        console.log(this);
        this.move(e)
        this.changePlayerTurn();
    }
}

export {Game}