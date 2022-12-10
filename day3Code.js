const { Console } = require('console');
const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    let priorityArr = []
    const arr = contents.split(/\r?\n/);
    let arrCopy = [...arr]

    for(let i = 0; i < arrCopy.length; i++){ //arrCopy.length
        let letterSet = "0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let pocketStash = arrCopy[i].length / 2
        let pocket1 = arrCopy[i].slice(0,pocketStash)
        let pocket2 = arrCopy[i].slice(pocketStash,arrCopy[i].length)
        let pattern = new RegExp(`[${pocket1}]`, "g")
        let priorities = [...new Set(pocket2.match(pattern))]
        for(let p = 0; p < priorities.length; p++){
            let letterVal = letterSet.indexOf(`${priorities[p]}`)
            priorityArr.push(letterVal)
        }
    }
    console.log(priorityArr.reduce((accumulator, currentValue) => accumulator + currentValue,0))
    return priorityArr
}


syncReadFile('./day3Data.txt');