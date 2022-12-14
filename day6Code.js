const { Console } = require('console');
const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    let text = arr[0]
    let packetLength = 14
    for(i = 0; i < text.length; i++){//text.length
        let extraction = text.slice(i,i + packetLength)
        let test = extraction.match(/^.*(.).*\1.*$/)
        if(test === null){
            console.log(text.indexOf(extraction) + packetLength)
            console.log(i + packetLength)
            return extraction
        }
        }
        return arr
    }
syncReadFile('./day6Data.txt')