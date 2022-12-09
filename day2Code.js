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
    let meVal

    if (me === "X") {
        switch(opponent){
            case "A": //rock 1
                meVal = 3;
                break;
            case "B": //paper 2
                meVal = 1;
                break;
            case "C": //scissors 3
                meVal = 2;
        }
    } else if (me === "Y") {
        switch(opponent){
            case "A": //rock 1
                meVal = 1 + 3;
                break;
            case "B": //paper 2
                meVal = 2 + 3;
                break;
            case "C": //scissors 3
                meVal = 3 + 3;
        }
    } else if (me === "Z") {
        switch(opponent){
            case "A": //rock 1
                meVal = 2 + 6;
                break;
            case "B": //paper 2
                meVal = 3 + 6;
                break;
            case "C": //scissors 3
                meVal = 1 + 6;
        }
    }
    
        TotalsArr.push(meVal)
    }
    console.log(TotalsArr)
    console.log(TotalsArr.reduce((accumulator, currentValue) => accumulator + currentValue,0))
    return TotalsArr
}

syncReadFile('./day2Data.txt');