var document;

const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const result = document.getElementById("result");
const roll = document.getElementById("roll");

function rollingDice(){
    return (Math.floor(Math.random() * 6) )+1;
}

function play(value1,value2){
    result.innerHTML = value1+value2==11 || value1+value2==7?`You won!`:`You lose!`;
}


roll.onclick = () =>{
    const value1 = rollingDice();
    const value2 = rollingDice();
    dice1.innerHTML = value1;
    dice2.innerHTML = value2;
    play(value1,value2);
}
