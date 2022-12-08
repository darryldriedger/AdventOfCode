const { Console } = require('console');
const {readFileSync, promises: fsPromises} = require('fs');

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  let elfCount = 0 
  let elves = []
  elves[elfCount] = []
  const arr = contents.split(/\r?\n/);
  let elvesCalories = []


  

for(let i=0; i < arr.length; i++){
   

    if(Number(arr[i]) === 0){
        elfCount ++
        elves[elfCount] = []
        elves[elfCount].push(Number(arr[i]))
    } else { 
        elves[elfCount].push(Number(arr[i]))
    }

}
for(let i=0; i < elves.length; i++){
elvesCalories.push(elves[i].reduce((accumulator, currentValue) => accumulator + currentValue,0))
}
console.log(elvesCalories)
console.log(Math.max(...elvesCalories))
//   console.log(arr);
// console.log(contents)

  return elves;
}



syncReadFile('./day1Data.txt');
