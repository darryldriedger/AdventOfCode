
const {readFileSync, promises: fsPromises} = require('fs')

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8')
    const arr = contents.split(/\r?\n/)
    let matrixArr = [], visArr = []

    for(i = 0; i < arr.length; i++){
        let stringArr = [...arr[i]]
        let numArr = []
        for(j = 0; j < stringArr.length; j++){
           let num = parseInt(stringArr[j])
            numArr.push(num)
        }
        matrixArr.push(numArr)
        visArr.push(numArr)
    }

    // for(baseRow = 0; baseRow < visArr.length; baseRow++){
    //     for(basePosition = 0; basePosition < visArr[baseRow].length; basePosition++){
    //         visArr[baseRow][basePosition] = 0
    //     }
    // }

    let arrLength = matrixArr.length - 1
    
    for(row = 0; row < 2; row++){//matrixArr.length
        let rowLength = matrixArr[row].length - 1, bottomRow = arrLength - row
        let saveLeft = 0, saveRight = 0, saveTop = 0, saveBottom = 0

        for(position = 0; position <= rowLength; position++){
            let rightPosition = rowLength - position

            if(position === 0 || position === rowLength || row === 0 || row === rowLength ){
                visArr[row][position] = 1
            } else {
                let runFromLeft = matrixArr[row][position] 
                // console.log(matrixArr[row][position])
                let prevLeftTree = matrixArr[row][position - 1]
                // let prevTopTree      = matrixArr[row - 1][position]
                // let prevBottomTree   = matrixArr[bottomRow + 1][position]
                // let runFromRight     = matrixArr[row][rightPosition]
                // let prevRightTree    = matrixArr[row][rightPosition + 1]
                //left
                if(prevLeftTree < runFromLeft){
                    saveLeft = runFromLeft
                    visArr[row][position] = 1
                    console.log(`num ${saveLeft}`)
                } else {console.log(position)}
                // console.log(saveLeft)
                // //right
                // if(prevRightTree < runFromRight){
                //     saveRight = runFromRight
                //     visArr[row][rightPosition] = 1
                // }
                // // //top
                // if(runFromLeft > prevTopTree && prevTop === 1){
                //     visArrTop[row][position] = 1
                //     prevTop = 1
                // }
                // //bottom
                // if(runFromLeft > prevBottomTree && prevBottom === 1){
                //     visArrBottom[bottomRow][position] = 1
                //     prevBottom = 1
                // }
            }
        }

    }

    let sum = (a, b) => a + b
    let sums = 0
    for (let i = 0; i < visArr.length; i++) {
        sums += visArr[i].reduce(sum)
    }
    // console.log(visArr[0])
    // console.log(visArr[98])
    // console.log(visArr[0].length)
    // console.log(visArr.length)
    // // console.log(matrixArr[0])
    // console.log(matrixArr[98])
    // console.log(matrixArr)
    // console.log(visArr)
    console.log(sums)
// console.log(visArr)
    return
}

syncReadFile('./day8Data.txt')