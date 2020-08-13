import {Game} from "./game.js";

document.addEventListener("DOMContentLoaded", () =>
{
    //globals
    //to keep track of player turn
    let playerTurn = "black";
    let boardState = [[],[],[],[],[],[],[]];
    let game = undefined;


    


    //functions
    function updateUI(){
        if(!game){
            document.getElementById("board-holder").classList.add("is-invisible");
        } else{
            document.getElementById("board-holder").classList.remove("is-invisible");
            document.getElementById("game-name").innerHTML = game.getName();
        }
    }


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

    function enableNewGame(){
        let p1input = document.getElementById("player-1-name");
        let p2input = document.getElementById("player-2-name");
        if(p1input.value && p2input.value){
            document.getElementById("new-game").disabled = false;
        }else{
            document.getElementById("new-game").disabled = true;
        }
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

    function newGame(){
        let p1name = document.getElementById("player-1-name");
        let p2name = document.getElementById("player-2-name");
        game = new Game(p1name.value, p2name.value);

        p1name.value = "";
        p2name.value = "";
        document.getElementById("new-game").disabled=true;
        updateUI();
    }


    //setUp
    changePlayerTurn();


    //adding event listeners
    let ele = document.getElementById("click-targets");
    ele.addEventListener("click", e => {
        move(e)
        changePlayerTurn();
    })

    document.getElementById("player-1-name").addEventListener("keyup", enableNewGame);
    document.getElementById("player-2-name").addEventListener("keyup", enableNewGame);

    document.getElementById("new-game").addEventListener("click", newGame);

})