document.addEventListener("DOMContentLoaded", () =>
{
    //globals
    //to keep track of player turn
    let playerTurn = "black";
    let boardState = [[],[],[],[],[],[],[]]


    //functions
    function changePlayerTurn(){
        let board = document.getElementById("click-targets")
        board.classList.remove(playerTurn);
        if(playerTurn==="black"){
            playerTurn="red";
        }else{
            playerTurn="black";
        }
        board.classList.add(playerTurn);
    }

    function move(e){
        const t = e.target;
        //get last digit for column number
        const columnNumber = Number(t.id[t.id.length - 1])
        boardState[columnNumber].push(playerTurn);
        const rowNumber = 6 - boardState[columnNumber].length
        const newToken = document.createElement("div");
        newToken.classList.add(playerTurn, "token");
        const square = document.getElementById(`square-${rowNumber}-${columnNumber}`);
        square.appendChild(newToken)
    }


    //setUp
    changePlayerTurn();


    //adding event listeners
    let ele = document.getElementById("click-targets");
    ele.addEventListener("click", e => {
        move(e)
        changePlayerTurn();
    })

    
})