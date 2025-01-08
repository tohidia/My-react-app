const {readFile, writeFile} = require('fs')
console.log('start')
readFile('./Subfolder/first.txt','utf8',(err,result)=>{
  if(err){
     console.log(err)
    return
  }
    // console.log(result) 
   const first = result
   readFile('./Subfolder/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
       return
     }
    const second = result
    writeFile(
     './Subfolder/result-sync.txt',
     `Here is the result:${first},${second}`
     ,(err,result) => {
        if(err){
            console.log(err)
            return
        }
        console.log('done with this task')

     }
    )
   })

})
console.log('starting next task')