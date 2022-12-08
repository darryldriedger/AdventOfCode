const { Console } = require('console');
const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    let TotalsArr = []
    const arr = contents.split(/\r?\n/);
    let arrCopy = [...arr]

for(let i = 0; i < arrCopy.length; i++){
    let opponent = arrCopy[i].slice(0,1)
    let me = arrCopy[i].slice(2)
    let OpponentVal, meVal, OpponentType, meType

    switch(opponent){
        case "A":
            OpponentVal = 1;
            break;
        case "B":
            OpponentVal = 2;
            break;
        case "C":
            OpponentVal = 3;
    }
    switch(opponent){
        case "A":
            OpponentType = "ROCK";
            break;
        case "B":
            OpponentType = "PAPER";
            break;
        case "C":
            OpponentType = "SCISSORS";
    }
    switch(me){
        case "X":
            meVal = 1;
            break;
        case "Y":
            meVal = 2;
            break;
        case "Z":
            meVal = 3;
    }
    switch(me){
        case "X":
            meType = "ROCK";
            break;
        case "Y":
            meType = "PAPER";
            break;
        case "Z":
            meType = "SCISSORS";
    }
    if(OpponentType === "ROCK" && meType === "SCISSORS" || OpponentType === "PAPER" && meType === "ROCK"|| OpponentType === "SCISSORS" && meType === "PAPER"){
        TotalsArr.push(meVal)
    } else if(OpponentType === meType) {
        let Tie = meVal + 3
        TotalsArr.push(Tie)
    } else if(OpponentType === "SCISSORS" && meType === "ROCK" || OpponentType === "ROCK" && meType === "PAPER" || OpponentType === "PAPER" && meType === "SCISSORS") {
        let Win = meVal + 6
        TotalsArr.push(Win)
    }

}
console.log(TotalsArr)
console.log(TotalsArr.reduce((accumulator, currentValue) => accumulator + currentValue,0))
return TotalsArr
}

syncReadFile('./day2Data.txt');