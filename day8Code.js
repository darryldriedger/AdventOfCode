
const {readFileSync, promises: fsPromises} = require('fs')

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8')
    const arr = contents.split(/\r?\n/)
    let matrixArr = []

    for(i = 0; i < arr.length; i++){
        let stringArr = [...arr[i]]
        let numArr = []
        for(j = 0; j < stringArr.length; j++){
           let num = parseInt(stringArr[j])
            numArr.push(num)
        }
        matrixArr.push(numArr)
    }

    let visArrLeft = [...matrixArr], visArrRight = [...matrixArr], visArrTop = [...matrixArr], visArrBottom = [...matrixArr]
    let prevTop = 1, prevRight = 1, prevBottom = 1, prevLeft = 1

    for(row = 0; row < matrixArr.length; row++){

        let arrLength = matrixArr.length - 1, rowLength = matrixArr[row].length - 1, bottomRow = arrLength - row

        for(position = 0; position <= rowLength; position++){
            let rightPosition = rowLength - position

            if(position === 0 || position === rowLength || row === 0 || row === rowLength ){
                visArrLeft[row][position] = 1
                visArrRight[row][position] = 1
                visArrTop[row][position] = 1
                visArrBottom[row][position] = 1
            // } else if(rightPosition === 0 || rightPosition === rowLength || row === 0 || row === rowLength ){
            //     visArrLeft[row][rightPosition] = 1
            //     visArrRight[row][rightPosition] = 1
            //     visArrTop[row][rightPosition] = 1
            //     visArrBottom[row][rightPosition] = 1
            } else {

                let runFromLeft      = matrixArr[row][position] 
                let prevLeftTree     = matrixArr[row][position - 1]
                let prevTopTree      = matrixArr[row - 1][position]
                let prevBottomTree   = matrixArr[bottomRow + 1][position]
                let runFromRight     = matrixArr[row][rightPosition]
                let prevRightTree    = matrixArr[row][position + 1]

                //left
                if(runFromLeft > prevLeftTree && prevLeft === 1){
                    visArrLeft[row][position] = 1
                    prevLeft = 1
                } else if(visArrLeft[row][position] !== 1){
                    visArrLeft[row][position] = 0
                    prevLeft = 0
                }
                //right
                if(runFromRight > prevRightTree && prevRight === 1){
                    visArrRight[row][rightPosition] = 1
                    prevRight = 1
                } else if(visArrRight[row][rightPosition] !== 1) {
                    visArrRight[row][rightPosition] = 0
                    prevRight = 0
                }
                // //top
                // if(runFromLeft > prevTopTree && prevTop === 1){
                //     visArrTop[row][position] = 1
                //     prevTop = 1
                // } else if(visArrTop[row][position] !== 1){
                //     visArrTop[row][position] = 0
                //     prevTop = 0
                // }
                // //bottom
                // if(runFromLeft > prevBottomTree && prevBottom === 1){
                //     visArrBottom[bottomRow][position] = 1
                //     prevBottom = 1
                // } else if(visArrBottom[bottomRow][position] !== 1) {
                //     visArrBottom[bottomRow][position] = 0
                //     // prevBottom = 0
                // }
            }
        }

    }

    let sum = (a, b) => a + b
    let sumLeft = 0, sumRight = 0, sumTop = 0, sumBottom = 0
    for (let i = 0; i < visArrLeft.length; i++) {
        sumLeft += visArrLeft[i].reduce(sum)
    }
    // for (let i = 0; i < visArrRight.length; i++) {
    //     sumRight += visArrRight[i].reduce(sum)
    // }
        // sumTop += visArrTop[i].reduce(sum)
        // sumBottom += visArrBottom[i].reduce(sum)
    // console.log(visArrLeft[0])
    console.log(visArrLeft[1])
    // console.log(visArrRight[0])
    console.log(visArrRight[1])
    console.log(sumLeft)
    console.log(sumRight)
    console.log(sumTop)
    console.log(sumBottom)
    console.log(sumLeft + sumRight + sumTop + sumBottom)

    return
}

syncReadFile('./day8Data.txt')