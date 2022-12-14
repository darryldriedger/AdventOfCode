const { Console } = require('console');
const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    let arrCopy = [...arr]
    let freight = []
    let freightRow = []
    for(i = 0; i < 8; i++){
        let newRow = freightRow[i] = []
        for(j = 1; j <= arrCopy[i].length; j += 4){
            let box = arrCopy[i].slice(j,j+1)
            newRow.push(box)
        }
        freight.push(newRow)
    }
    let stacks = [[],[],[],[],[],[],[],[],[]]
    for(stackArray = 0; stackArray < freight.length; stackArray++){
        for(stack = 0; stack < 9; stack++){
            let resultStack = stacks[stack]
            if(freight[stackArray][stack] !== ' '){
                resultStack.push(freight[stackArray][stack])
            }
        }
    }
    for(i = 10; i < arrCopy.length; i++){//arrCopy.length
        let move = arrCopy[i].match(/^\d+|\d+\b|\d+(?=\w)/g)
        let fromStack = Number(move[1]) -1
        let toStack = Number(move[2]) -1
        let cranePick = stacks[fromStack]
        let craneDrop = stacks[toStack]
        let crane9001 = cranePick.splice(0,Number(move[0]))
        while(crane9001.length >= 1){
            craneDrop.unshift(crane9001.pop())
        }
    }
    console.log(stacks)
        return arrCopy
    }
syncReadFile('./day5Data.txt')