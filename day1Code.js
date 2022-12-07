const { Console } = require('console');
const {readFileSync, promises: fsPromises} = require('fs');

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const elves = []
  elves[0] = []
  const arr = contents.split(/\r?\n/);


  const elfCount = 0
  

for(let i=0; i < arr.length; i++){
    // console.log(Number(arr[i]))
    let elf = elves[elfCount]
    if(Number(arr[i]) == 0){
        elfCount + 1 
        // console.log(elfCount) 
        elf.push(Number(arr[i]))
    } else { elf.push(Number(arr[i]))
    }
}
//   console.log(arr);
// console.log(contents)
console.log(elves)
  return elves;
}



syncReadFile('./day1Data.txt');
