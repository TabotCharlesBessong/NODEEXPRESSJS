
console.log("hello people");
// The event loop in node js 
console.log('first task');
console.time()
for(let i = 0; i < 1000 ; i++){
  // let h3 = document.createElement('h3')
  // h3.textContent = "Hello men"
  console.log(i);
}

console.timeEnd()
console.log('Next task');

console.log('first');
setTimeout(()=>{
  console.log('second');
},0)

console.log('last');

setInterval(()=>{
  console.log('Hello world');
},2000)

console.log('I will always run first')

const res = require('express/lib/response')
const http = require('http')
const port = 5000
const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.end('Home page')
  }
  if(req.url === '/about'){
    for(let i = 0;i<100;i++){
      for(let j = 0; j < 100 ; j++){
        console.log(`${i} and ${j}`);
      }
    }
    res.end('The about page')
  }
})

server.listen(port,()=>{
  console.log(`The server is listening on port ${port}`);
})