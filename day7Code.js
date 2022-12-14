//https://adrianmejia.com/data-structures-for-beginners-trees-binary-search-tree-tutorial/

const { Console } = require('console');
const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    console.log(arr)
        return arr
    }
syncReadFile('./day7Data.txt')