const { Console } = require('console');
const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    let arrCopy = [...arr]

    let Count = 0
    let row = []
    for(let i = 0; i < arrCopy.length; i++){
        let teams = arrCopy[i]
        let step1 = teams.split(",")

        row = []
        for(let j = 0; j < step1.length; j++){
            const start = Number(step1[j].split('-')[0])
            const finish = Number(step1[j].split('-')[1])
            row.push(start)
            row.push(finish)
        } 
        if(row[0] >= row[2] && row[0] <= row[3] || row[1] >= row[2] && row[1] <= row[3] ){
            Count ++
        } else if (row[2] >= row[0] && row[2] <= row[0] || row[3] >= row[0] && row[3] <= row[1]){
            Count ++
        }
    }
    console.log(Count)
    return Count
}

syncReadFile('./day4Data.txt')