
const {readFileSync, promises: fsPromises} = require('fs')

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8')
    const arr = contents.split(/\r?\n/)
    let matrixArr = [], perfectTree = 0

    for(i = 0; i < arr.length; i++){
        let stringArr = [...arr[i]]
        let numArr = []
        for(j = 0; j < stringArr.length; j++){
           let num = parseInt(stringArr[j])
            numArr.push(num)
        }
        matrixArr.push(numArr)
    }
    
    for(row = 0; row < matrixArr.length; row++){
        
        for(position = 0; position <= matrixArr[row].length - 1; position++){
            // console.log(matrixArr[row][position])
            //left   
            leftAdder = 0 
            left = 0
            // console.log(`LEFT======xxxx ${row} ${position} xxxx========`)
            for(g = position - 1; g >= 0; g--){
                let tester = matrixArr[row][g]
                // console.log(matrixArr[row][g])
                if(tester < matrixArr[row][position] && left === 0){
                    // console.log(tester)
                    leftAdder += 1
                } else if(tester >= matrixArr[row][position] && left === 0){
                    // console.log(tester)
                    leftAdder += 1
                    left = tester
                }
            }
            //right   
            rightAdder = 0             
            right = 0
            // console.log(`RIGHT======xxxx ${row} ${position} xxxx========`)
            for(g = position + 1; g <= matrixArr[row].length; g++){
                let tester = matrixArr[row][g]
                // console.log(matrixArr[row][g])
                if(tester < matrixArr[row][position] && right === 0){
                    // console.log(tester)
                    rightAdder += 1
                } else if(tester >= matrixArr[row][position] && right === 0){
                    // console.log(tester)
                    rightAdder += 1
                    right = tester
                }
            }
            //top   
            topAdder = 0            
            top = 0
            // console.log(`TOP======xxxx ${row} ${position} xxxx========`)
            for(g = row - 1; g >= 0; g--){
                let tester = matrixArr[g][position]
                // console.log(matrixArr[row][g])
                if(tester < matrixArr[row][position] && top === 0){
                    // console.log(tester)
                    topAdder += 1
                } else if(tester >= matrixArr[row][position] && top === 0){
                    // console.log(tester)
                    topAdder += 1
                    top = tester
                }
            }
            //bottom   
            bottomAdder = 0         
            bottom = 0
            // console.log(`BOTTOM======xxxx ${row} ${position} xxxx========`)
            for(g = row + 1; g < matrixArr.length; g++){
                let tester = matrixArr[g][position]
                // console.log(matrixArr[row][g])
                if(tester < matrixArr[row][position] && bottom === 0){
                    // console.log(tester)
                    bottomAdder += 1
                } else if(tester >= matrixArr[row][position] && bottom === 0){
                    // console.log(tester)
                    bottomAdder += 1
                    bottom = tester
                }
            }      
            // console.log(`${leftAdder}*${rightAdder}*${topAdder}*${bottomAdder}`)    
            // console.log(leftAdder*rightAdder*topAdder*bottomAdder)   
            if(leftAdder*rightAdder*topAdder*bottomAdder > perfectTree){
                perfectTree = leftAdder*rightAdder*topAdder*bottomAdder
            }
        }

    }

    console.log(perfectTree)
    // console.log(matrixArr)
    return
}
syncReadFile('./day8Data.txt')
// syncReadFile('./exampledata.txt')