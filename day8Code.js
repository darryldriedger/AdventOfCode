
const { Console } = require('console')
const {readFileSync, promises: fsPromises} = require('fs')

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8')
    const arr = contents.split(/\r?\n/)
    let matrixArr = []
    let visibleStatusArr = []

    for(i = 0; i < arr.length; i++){
        let stringArr = [...arr[i]]
        matrixArr.push(stringArr)
    }

    for(row = 0; row < matrixArr.length; row++){

        visibleStatusArr[row] = []

        for(position = 0; position < matrixArr[row].length; position++){
            if(row === 0 || row === matrixArr.length - 1 || position === 0 || position === matrixArr[row].length - 1){
                console.log(matrixArr.length)
                visibleStatusArr[row].push(1)
            } else {
                let top = row - 1
                let left = position - 1

                //top down
                if(Number(matrixArr[row][position]) > Number(matrixArr[top][position]) && visibleStatusArr[top][position] === 1){
                    visibleStatusArr[row].push(1)
                } else {
                    visibleStatusArr[row].push(0)
                }
                //left to right
                if(Number(matrixArr[row][position]) > Number(matrixArr[row][left]) && visibleStatusArr[row][left] === 1){
                    visibleStatusArr[row][position] = 1
                } else {
                        if(visibleStatusArr[row][position] !== 1){
                            visibleStatusArr[row][position] = 0
                        } 
                    }
                }       
        }
    }


    let backPassRow = matrixArr.length - 2
    let backPassPosition = matrixArr[0].length - 2

    for(row = backPassRow; row > 0; row--){

        for(position = backPassPosition; position > 0; position--){
                let right = position + 1
                let bottom = row + 1

                //bottom up
                if(Number(matrixArr[row][position]) > Number(matrixArr[bottom][position]) && visibleStatusArr[bottom][position] === 1){
                    visibleStatusArr[row][position] = 1
                } else {
                    if(visibleStatusArr[row][position] !== 1){
                        visibleStatusArr[row][position] = 0
                    } 
                }

                //right to left
                if(Number(matrixArr[row][position]) > Number(matrixArr[row][right]) && visibleStatusArr[row][right] === 1){
                    visibleStatusArr[row][position] = 1
                } else {
                        if(visibleStatusArr[row][position] !== 1){
                            visibleStatusArr[row][position] = 0
                        } 
                    }
                      
        }
    }
    let sum = (a, b) => a + b
    let summer = 0
    for (let i = 0; i < visibleStatusArr.length; i++) {
        // console.log(i)
        summer += visibleStatusArr[i].reduce(sum)
    }
    // var sum = (r, a) => r.map((b, i) => a[i] + b);
    // let summmer = visibleStatusArr.reduce(sum)

    console.log(summer)
    console.log(visibleStatusArr[1].length)
        return visibleStatusArr
}

syncReadFile('./day8Data.txt')