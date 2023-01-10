
const {readFileSync, promises: fsPromises} = require('fs')

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8')
    const arr = contents.split(/\r?\n/)
    let matrixArr = []

    for(i = 0; i < arr.length; i++){
        let stringArr = [...arr[i]]
        matrixArr.push(stringArr)
    }

    let visibleStatusArr = [...matrixArr]

    // console.log(visibleStatusArr)
    for(row = 0; row < matrixArr.length; row++){

        for(position = 0; position < matrixArr[row].length; position++){

            if(row === 0 || row === matrixArr.length - 1 || position === 0 || position === matrixArr[row].length - 1){
                visibleStatusArr[row][position] = 1

            } else {
                let top = row - 1
                let left = position - 1
                let positionR = matrixArr[row].length - position
                let right = positionR + 1
                console.log(top)
                console.log(left)
                console.log(positionR)
                console.log(right)
//============================>>>>>>>>   
            //top down
                if(Number(matrixArr[row][position]) > Number(matrixArr[top][position]) && visibleStatusArr[top][position] === 1){
                    visibleStatusArr[row][position] = 1
                } else {
                    visibleStatusArr[row][position] = 0
                }
//============================>>>>>>>>             
            //left to right
                if(Number(matrixArr[row][position]) > Number(matrixArr[row][left]) && visibleStatusArr[row][left] === 1){
                    visibleStatusArr[row][position] = 1
                } else {
                        if(visibleStatusArr[row][position] !== 1){
                            visibleStatusArr[row][position] = 0
                        } 
                }
//============================>>>>>>>>  
            //right to left
                if(Number(matrixArr[row][positionR]) > Number(matrixArr[row][right]) && visibleStatusArr[row][right] === 1){
                    visibleStatusArr[row][positionR] = 1
                } else {
                        if(visibleStatusArr[row][positionR] !== 1){
                            visibleStatusArr[row][positionR] = 0
                        } 
                }
//============================>>>>>>>>
                let rowB = matrixArr.length - position
                let bottom = rowB + 1
// //============================>>>>>>>>                      
//                 if(row !== 0 || row !== matrixArr.length - 1 || position !== 0 || position !== matrixArr[row].length - 1){
// //============================>>>>>>>>   
//             // //top down
//             //         if(Number(matrixArr[rowB][position]) > Number(matrixArr[bottom][position]) && visibleStatusArr[bottom][position] === 1){
//             //             visibleStatusArr[rowB][position] = 1
//             //         } else {
//             //             visibleStatusArr[rowB][position] = 0
//             //         }                

//                 } 
            }       
        }
    }

    let sum = (a, b) => a + b
    let summer = 0
    for (let i = 0; i < visibleStatusArr.length; i++) {
        // console.log(i)
        summer += visibleStatusArr[i].reduce(sum)
        // console.log(visibleStatusArr[i].reduce(sum))
        // console.log(summer)
    }


// console.log(visibleStatusArr)
// console.log(visibleStatusArr[1])
// console.log(visibleStatusArr[2])
// console.log(visibleStatusArr[3])
    // console.log(summer)
    // console.log(visibleStatusArr[1].length)
        return visibleStatusArr
}

syncReadFile('./day8Data.txt')