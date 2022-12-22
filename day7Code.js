
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
          this.descendants = [];
          this.parents = [];
          this.directParent = null;
          this.fileSize = 0;
        }
    }
    filesys.root = new sysNode('root')
    position = filesys.root.value

    for(cmdCounter; cmdCounter < arr.length; cmdCounter++){
        termLine = arr[cmdCounter].split(" ")
        // console.log(termLine)
        if(termLine[0] === "$"){
            if(termLine[1] === "cd"){
                if(termLine.includes("/")){
                    position = 'root'
                    // console.log("/")
                    // console.log(position)
                } else if(termLine.includes("..")){
                        position = filesys[position].directParent
                        // console.log("..")
                        // console.log(position)
                } else {
                    position = termLine[2]
                    // console.log("move to")
                    // console.log(position)
                }
            } else if(termLine[1] = "ls"){
                cmdCounter++ 
                termLine = arr[cmdCounter].split(" ")

                for (cmdCounter; cmdCounter < arr.length; cmdCounter++) {
                    termLine = arr[cmdCounter].split(" ")
                    if (termLine.includes("$")) { break; }

                    let newNode = new sysNode(termLine[1])
                    filesys[newNode.value] = newNode

                    if(termLine.includes("dir")){
                        newNode.type = "dir"
                    } else {
                        newNode.type = "file"
                        newNode.fileSize = Number(termLine[0])
                    }
                        newNode.parents.push(position)
                        newNode.directParent = filesys[position].value
                        filesys[position].descendants.push(newNode.value)
                  }
                  cmdCounter--
            }
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
        if (filesys[key].type === 'dir') {  //key !== 'root' && 
            let childList = filesys[key].descendants
            for(i = 0; i < childList.length; i++){
                let child = childList[i]
                let childSize = filesys[child].fileSize
                filesys[key].fileSize += childSize
            }
         }
    })

    //   let dirTotal = 0
    // Object.keys(filesys).forEach((key) => {
    //     if(filesys[key].type === "dir"){
    //         if(filesys[key].fileSize <= 100000){
    //             dirTotal += filesys[key].fileSize
    //         }
    //         if(filesys[key].fileSize === 0){
    //             console.log(filesys[key].value)
    //         }
    //     }
    //     return dirTotal
    // })
    // console.log(filesys)
    // console.log(`The directory Total under 100000 is ${dirTotal}`)
    // console.log(filesys['jfp'])
    // console.log(filesys['wvdqjn'])
    // console.log(filesys['zmllsrzc'])
    // console.log(filesys['slwhsqw'])
    // console.log(filesys['bgv'])
    // console.log(filesys['bvqwrs'])
    //1723892
        return filesys
}

syncReadFile('./day7Data.txt')