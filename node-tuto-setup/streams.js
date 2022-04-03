// basic

const {writeFileSync , createReadStream} = require('fs')
const stream = createReadStream('./content/big.txt',{highWaterMark:9000, encoding:'utf-8'})

stream.on('data',(result)=>{
  console.log("\n",result);
})

stream.on('error',(err)=> console.log(err))

for(let i = 0; i < 2500 ; i++){
  writeFileSync('./content/big.txt',`Hello my friends ${i}\n `,{flag:'a'})
}


// example
const http = require('http')
const fs = require('fs')
const port = 5000

http.createServer((req,res)=>{
  const fileStream = fs.createReadStream('./content/big.txt','utf-8')
  fileStream.on('open',()=>{
    fileStream.pipe()
  })
  fileStream.on('error',(err)=>{
    res.end(err)
  })
}).listen(port);