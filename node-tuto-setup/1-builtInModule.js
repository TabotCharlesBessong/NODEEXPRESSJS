// Built in modules 
const express = require('express')
// const the http module
const http = require('http')
// The os module , helps us interact with the OS and the computer
const os = require('os')
// The path module
const path = require('path')
// The file module
const {readFileSync,writeFileSync} = require('fs') 
// The above is same as 
// /*const fs = require('fs')
// fs.readFileSync()*/
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

writeFileSync('./content/resultats-sync.txt',`Here is my home ${first} , ${second} `)

writeFileSync('./content/resultats-sync.txt', ` ${second}, Here is my home ${first}  `, {flag:'a'} )
console.log(first);
// The info user

const user = os.userInfo()
console.log(user);

// duration of system
console.log(`The system uptime is ${Math.floor(os.uptime/60)} minutes`);
const currentOs = {
  name:os.type(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem:os.freemem()
}

console.log(currentOs);

// Path method
console.log(path.sep);
// join meth
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath);
const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);

const port = 5000
const app = express()

app.listen(port,(req,res)=>{
  console.log(`server is running on port ${port}`);
  
})

app.get(port,(req,res)=>{
  res.send("Hello my friends , its been long time ")
})

// The http module 
const server = http.createServer((req,res)=>{
  res.write(`The server is running on port ${port} `)
  res.end()
})
 

// server.listen(5000)
