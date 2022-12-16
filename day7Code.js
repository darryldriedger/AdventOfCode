
const { Console } = require('console');
const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    // console.log(arr)

    let filesys = { root: {} }
    // filesys.root = {}    
    let position = filesys.root
    let prevPosition
    let cmdCounter = 0

    // class filesys {
    //     constructor(value) {
    //       this.value = value;
    //       this.type = "";
    //       this.descendants = [];
    //       this.parent = null;
    //       this.fileSize = null;
    //     }
    // }
    // let root = new filesys('root');

    for(cmdCounter; cmdCounter < 30; cmdCounter++){              //arr.length
        termLine = arr[cmdCounter].split(" ")
        // if(termLine.length === 2){
        //     console.log(termLine)
        // } else {}
        // console.log(position)
            console.log(termLine)

        if(termLine[0] === "$"){
            if(termLine[1] === "cd"){
                if(termLine.includes("/")){
                    // console.log("go to root")
                    position = filesys.root
                    // console.log(position)
                } else if(termLine[3] === ".."){
                    // console.log("go to parent")
                } else if(termLine[3] !== ""){
                    // console.log("navigate from current position")
                }
            } else if(termLine[1] = "ls"){
                // let list = []
                // cmdCounter++
            //    console.log("list out the files")
            // console.log(termLine)
            do{
                cmdCounter++
                termLine = arr[cmdCounter].split(" ")
                console.log(`==> ${termLine}`)
                // cmdCounter++
            }while(termLine[0] !== "$")

            //    list = arr[cmdCounter]
            //    list = list.split(" ")
            //    console.log(list)
            //    position.descendants = []
            //    position.descendants.push(list);
            position
            //    console.log(filesys)
            //    console.log("files listed")
            //    console.log(filesys.root)

            }
        }
    }
        return arr
}
syncReadFile('./day7Data.txt')