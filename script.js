const game=document.getElementById("head");
const dice=["0","images/dice-1.png","images/dice-2.png","images/dice-3.png","images/dice-4.png","images/dice-5.png","images/dice-6.png"];
function Dice(){
    const player1=parseInt(Math.random()*6)+1;
    const player2=parseInt(Math.random()*6)+1;
    if(player1>player2){
        game.textContent="🎉player1 wins!";
    }
    else if(player1<player2){
        game.textContent="🥳player2 wins!";
    }
    else{
        game.textContent="Oops!😥 its draw!";
    }
    document.getElementById("roll").src=dice[player1];
    document.getElementById("roll1").src=dice[player2];
    const music=new Audio("sounds/dice.mp3");
    music.play();
}
