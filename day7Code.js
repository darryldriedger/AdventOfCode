
const { Console } = require('console');
const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    // console.log(arr)

    let filesys = {}
    let position 
    let prevPosition
    let cmdCounter = 0

    class sysNode {
        constructor(value) {
          this.value = value;
          this.type = null;
          this.descendants = {};
          this.parent = null;
          this.position = null;
          this.fileSize = null;
        }
    }
    let root = new sysNode('root')
    filesys.root = root
    position = filesys.root
    console.log(filesys)
    
    for(cmdCounter; cmdCounter < arr.length; cmdCounter++){              //arr.length
        termLine = arr[cmdCounter].split(" ")
        console.log(termLine)
        if(termLine[0] === "$"){
            if(termLine[1] === "cd"){
                if(termLine.includes("/")){
                    position = filesys.root
                } else if(termLine.includes("..")){
                    console.log("test")
                    console.log(position)
                    // position = position.parent
                } else if(termLine[3] !== ""){

                    // console.log("navigate from current position")
                    // console.log(termLine)
                    // console.log(position)
                    // newObject = termLine[3]
                    // position[newObject] = {}
                    // console.log(filesys.root)
                    // position.descendants = new sysNode(termLine[3])
                }
            } else if(termLine[1] = "ls"){
                // let list = []
                // cmdCounter++
            //    console.log("list out the files")
            // console.log(termLine)


            // let newObj = new sysNode(termLine[1])
            //         position.descendants.push(newObj)
            // do{
            //     cmdCounter++
            //     termLine = arr[cmdCounter].split(" ")
            //     // console.log(`==> ${termLine}`)
            //     // cmdCounter++
            // }while(termLine[0] !== "$")

            //    list = arr[cmdCounter]
            //    list = list.split(" ")
            //    console.log(list)
            //    position.descendants = []
            //    position.descendants.push(list);
            // position
            //    console.log(filesys)
            //    console.log("files listed")
            //    console.log(filesys.root)

            }
        }
    }
        return arr
}
syncReadFile('./day7Data.txt')