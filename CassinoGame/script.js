var document;

const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const result = document.getElementById("result");
const roll = document.getElementById("roll");
var point = 0;
var previousPoint = 0;
function rollingDice(){
    return (Math.floor(Math.random() * 6) )+1;
}

function zero(){
    point = 0;
    previousPoint = 0;
}

function play(value1,value2){
        var currentPoint = value1+value2;
        previousPoint = point;
        point = currentPoint;
      if(previousPoint == 0 && (point==11 || point ==7)){
        result.innerHTML= `You Win`;
        zero();
        return;
      }
      if(previousPoint!= point && (point!=11&&point!=7)){
        result.innerHTML = `Your current points are ${currentPoint}`;
        return;
      }
    if(previousPoint!=point && point == 7){
        result.innerHTML= `You Lose`; 
       zero();
        return;
    }if(previousPoint!=0&&(point==previousPoint||point ==11)){
        result.innerHTML= `You Win`;
        zero();
        return;
    }
}


roll.onclick = () =>{
    const value1 = rollingDice();
    const value2 = rollingDice();
    dice1.innerHTML = value1;
    dice2.innerHTML = value2;
    play(value1,value2);
}
