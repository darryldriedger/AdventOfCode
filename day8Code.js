
const {readFileSync, promises: fsPromises} = require('fs')

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8')
    const arr = contents.split(/\r?\n/)
    let matrixArr = [], visArr = []

    for(i = 0; i < arr.length; i++){
        let stringArr = [...arr[i]]
        let numArr = [],visRowArr = []
        for(j = 0; j < stringArr.length; j++){
           let num = parseInt(stringArr[j])
            numArr.push(num)
            visRowArr.push(0)
        }
        matrixArr.push(numArr)
        visArr.push(visRowArr)
    }
    
    for(row = 0; row < matrixArr.length; row++){
        let saveLeft = matrixArr[row][0], saveRight = matrixArr[row][matrixArr[row].length -1]
        for(position = 0; position <= matrixArr[row].length - 1; position++){
            

            if(position === 0 || position === matrixArr[row].length - 1 || row === 0 || row === matrixArr.length - 1 ){
                visArr[row][position] = 1
            } else {
                // left
                if(matrixArr[row][position]> saveLeft){
                    saveLeft = matrixArr[row][position]
                    visArr[row][position] = 1
                } 
                //right
                if(matrixArr[row][matrixArr[row].length - 1 - position] > saveRight){
                    saveRight = matrixArr[row][matrixArr[row].length - 1 - position]
                    visArr[row][matrixArr[row].length - 1 - position] = 1
                }
            }
        }

    }

    for(position = 1; position < matrixArr[0].length - 1; position++){
        let saveTop = matrixArr[0][position], saveBottom = matrixArr[matrixArr.length - 1][position]

        for(row = 1; row < matrixArr.length - 1; row++){
            let bottomRow = matrixArr.length -1 - row
            // top
            if(matrixArr[row][position] > saveTop){
                saveTop = matrixArr[row][position]
                visArr[row][position] = 1
            }
            //bottom
            if(matrixArr[bottomRow][position] > saveBottom){
                saveBottom = matrixArr[bottomRow][position]
                visArr[bottomRow][position] = 1
            }
        }
    }


    let sum = (a, b) => a + b
    let sums = 0
    for (let i = 0; i < visArr.length; i++) {
        sums += visArr[i].reduce(sum)
    }
    console.log(sums)
    return
}
syncReadFile('./day8Data.txt')
// syncReadFile('./exampledata.txt')