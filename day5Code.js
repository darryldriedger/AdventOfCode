const { Console } = require('console');
const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    let arrCopy = [...arr]
    let freight = []
    let freightRow = []
    let freightObj = {}
    for(i = 0; i < 8; i++){
        let newRow = freightRow[i] = []
        for(j = 1; j <= arrCopy[i].length; j += 4){
            let box = arrCopy[i].slice(j,j+1)
            newRow.push(box)
        }
        freight.push(newRow)
    }
    console.log(freight)

    return arrCopy
}
syncReadFile('./day5Data.txt')