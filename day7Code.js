
const { Console } = require('console')
const {readFileSync, promises: fsPromises} = require('fs')

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8')
    const arr = contents.split(/\r?\n/)

    let filesys = {}
    let position = ""
    let cmdCounter = 0

    class sysNode {
        constructor(value) {
          this.value = value;
          this.type = null;
          this.name = "";
          this.path = "";
          this.descendants = [];
          this.parents = [];
          this.directParent = null;
          this.fileSize = 0;
        }
    }
    filesys.root = new sysNode('root')
    filesys.root.name = 'root'
    filesys.root.path = 'root'
    filesys.root.type = 'dir'
    position = filesys.root.value

    for(cmdCounter; cmdCounter < arr.length; cmdCounter++){//arr.length
        termLine = arr[cmdCounter].split(" ")
        // console.log(termLine)
        // console.log(position)
        // console.log(filesys[position])
        if(termLine[0] === "$"){
            if(termLine[1] === "cd"){
                if(termLine.includes("/")){
                    position = 'root'
                } else if(termLine.includes("..")){
                        if(position === 'root'){
                            position = 'root'
                        } else {
                            position = filesys[position].directParent
                        }
                } else {
                    position = `${filesys[position].value}_${termLine[2]}`
                }
            } else if(termLine[1] = "ls"){
                // console.log("List")
            }
        } else {
                if (termLine.includes("$")) { 
                    console.log("ERROR")
                    break; 
                }

                let newNode = new sysNode(`${position}_${termLine[1]}`)
                filesys[newNode.value] = newNode 

                if(termLine.includes("dir")){
                    newNode.type = "dir"
                } else {
                    newNode.type = "file"
                    newNode.fileSize = Number(termLine[0])
                }
                    newNode.name = termLine[1]
                    // newNode.parents.push(position)
                    // console.log(position)
                    newNode.directParent = filesys[position].value
                    // filesys[position].descendants.push(newNode.value)
                    // console.log(`${newNode.value} ${newNode.type} ${newNode.fileSize} ${newNode.directParent}`)
                    // console.log(newNode)
        }
    }
    // Object.keys(filesys).reverse().forEach((key) => {
    //     if (filesys[key].type === 'dir') {  //key !== 'root' && 
    //         let childList = filesys[key].descendants
    //         for(i = 0; i < childList.length; i++){
    //             let child = childList[i]
    //             let childSize = filesys[child].fileSize
    //             filesys[key].fileSize += childSize
    //         }
    //      }
    // })

    Object.keys(filesys).reverse().forEach((key) => {
                let parent = filesys[key].directParent
                if(parent !== null){
                    filesys[parent].fileSize += filesys[key].fileSize
                } else {
                    // console.log(filesys[parent])
                }
    })

      let dirTotal = 0
      let totalSize = filesys.root.fileSize
      let fileSysLimit = 70000000
      let unusedSpace = 30000000
      let targetSpace = fileSysLimit - unusedSpace
      let fileSizeArray = []
      let sizeToRemove = totalSize - targetSpace

    Object.keys(filesys).forEach((key) => {
        if(filesys[key].type === "dir"){
            // if(filesys[key].fileSize <= 100000){ //<= 100000
            //     dirTotal += filesys[key].fileSize
            // }
            if(filesys[key].fileSize > sizeToRemove){
                // totalSize += filesys[key].fileSize
                
                fileSizeArray.push(filesys[key].fileSize)
            }
        }
        return dirTotal, totalSize, fileSizeArray
    })

console.log(totalSize)
console.log(targetSpace)
console.log(sizeToRemove)

    // Object.keys(filesys).forEach((key) => {
    //     if(filesys[key].type === "dir"){
    //         if(filesys[key].fileSize > 0){
    //             fileSizeArray.push(filesys[key].fileSize)
    //         }
    //     }
    //     return fileSizeArray
    // })
    console.log(filesys.root)
    fileSizeArray.sort(function(a, b){return a - b})
    console.log(fileSizeArray)
    console.log(`The directory Total under 100000 is ${dirTotal}`)
        return filesys
}

syncReadFile('./day7Data.txt')