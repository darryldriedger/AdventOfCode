const { Console } = require('console');
const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    let priorityArr = []
    const arr = contents.split(/\r?\n/);
    let arrCopy = [...arr]

    for(let i = 0; i < arrCopy.length; i += 3){
        let letterSet = "0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let pack1 = arrCopy[i]
        let pack2 = arrCopy[i + 1]
        let pack3 = arrCopy[i + 2]
        let pattern1 = new RegExp(`[${pack1}]`, "g")
        let pattern3 = new RegExp(`[${pack3}]`, "g")
        let priorities = [...new Set(pack2.match(pattern1))]
        let packCheckOneTwo = priorities.join("")
        let priorities2 = [...new Set(packCheckOneTwo.match(pattern3))]
        for(let p = 0; p < priorities2.length; p++){
            let letterVal = letterSet.indexOf(`${priorities2[p]}`)
            priorityArr.push(letterVal)
        }
    }
    console.log(priorityArr)
    console.log(priorityArr.reduce((accumulator, currentValue) => accumulator + currentValue,0))
    return priorityArr
}

syncReadFile('./day3Data.txt');