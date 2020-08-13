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


    

    function enableNewGame(){
        let p1input = document.getElementById("player-1-name");
        let p2input = document.getElementById("player-2-name");
        if(p1input.value && p2input.value){
            document.getElementById("new-game").disabled = false;
        }else{
            document.getElementById("new-game").disabled = true;
        }
    }

    

    function newGame(){
        let p1name = document.getElementById("player-1-name");
        let p2name = document.getElementById("player-2-name");
        game = new Game(p1name.value, p2name.value);

        p1name.value = "";
        p2name.value = "";
        document.getElementById("new-game").disabled=true;
        updateUI();
        let ele = document.getElementById("click-targets");
        ele.addEventListener("click", e =>{
            const t = e.target;
            //get last digit for column number
            const columnNumber = Number(t.id[t.id.length - 1])
            game.move(columnNumber);
            game.checkColumnForFull(columnNumber);
            game.checkColumnWin(columnNumber);
            game.checkTie();
            updateUI();
            game.changePlayerTurn()
        })
    }



    //adding event listeners
    

    document.getElementById("player-1-name").addEventListener("keyup", enableNewGame);
    document.getElementById("player-2-name").addEventListener("keyup", enableNewGame);

    document.getElementById("new-game").addEventListener("click", newGame);

})