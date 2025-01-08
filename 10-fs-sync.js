const {readFileSync,writeFileSync,} = require('fs')

console.log('start');
const first = readFileSync('./Subfolder/first.txt','utf-8')
const second =readFileSync('./Subfolder/second.txt','utf8')
// console.log(first,second)
writeFileSync(
    './Subfolder/result-sync.txt',
    `Here is the result : ${first},${second}`,
    {flag:'a'}
)
console.log('done with this task')
console.log('starting the next one')
