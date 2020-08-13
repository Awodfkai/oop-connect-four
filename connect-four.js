document.addEventListener("DOMContentLoaded", () =>
{
    let playerTurn = "black";

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

    changePlayerTurn();
    let ele = document.getElementById("click-targets");
    ele.addEventListener("click", e => {
        changePlayerTurn();
    })

    
})