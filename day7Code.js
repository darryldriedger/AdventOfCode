
const { Console } = require('console')
const {readFileSync, promises: fsPromises} = require('fs')

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8')
    const arr = contents.split(/\r?\n/)

    let filesys = {}
    let position 
    let cmdCounter = 0

    class sysNode {
        constructor(value) {
          this.value = value;
          this.type = null;
          this.descendants = [];
          this.parent;
          this.fileSize = 0;
        }
    }
    let root = new sysNode('root')
    filesys.root = root
    position = root
    
    for(cmdCounter; cmdCounter < arr.length; cmdCounter++){              //arr.length
        termLine = arr[cmdCounter].split(" ")
        // console.log(termLine)
        if(termLine[0] === "$"){
            if(termLine[1] === "cd"){
                if(termLine.includes("/")){
                    position = root
                } else if(termLine.includes("..")){
                        position = position.parent
                } else if(termLine[2] !== ""){
                    let nextPosition = filesys[termLine[2]]
                    position = nextPosition
                }
            } else if(termLine[1] = "ls"){
                cmdCounter++ 
                termLine = arr[cmdCounter].split(" ")

                for (cmdCounter; cmdCounter < arr.length; cmdCounter++) {
                    termLine = arr[cmdCounter].split(" ")
                    if (termLine.includes("$")) { break; }
                    if(termLine.includes("dir")){
                        let newNode = termLine[1]
                        newNode = new sysNode(termLine[1])
                        newNode.type = "dir"
                        newNode.parent = position
                        position.descendants.push(newNode.value)
                        filesys[termLine[1]] = newNode
                    } else {
                        let newNode = termLine[1]
                        newNode = new sysNode(termLine[1])
                        newNode.type = "file"
                        newNode.parent = position
                        position.descendants.push(newNode.value)
                        newNode.fileSize = Number(termLine[0])
                        position.fileSize = position.fileSize + Number(termLine[0])
                        filesys[termLine[1]] = newNode
                    }
                  }
                  cmdCounter--
            }
        }
    }
    for(i = 0; i < root.descendants.length; i++){
        let focus = root.descendants[i]
        // console.log(filesys[focus])
        if(filesys[focus].type === "dir"){
            console.log(root.descendants[i])
        }
    }
    // console.log(Object.keys(filesys).length)
    // console.log(filesys)
    // console.log(root)
        return arr
}
syncReadFile('./day7Data.txt')