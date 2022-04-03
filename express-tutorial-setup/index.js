
const http = require('http')
const {readFileSync} = require('fs')
const port = 5000
const server = http.createServer((req,res)=>{
  // console.log(req);
  // console.log(req.url);
  // console.log(req.method);

  // get all filess
  const homePage = readFileSync('./index.html')

  const url = req.url
  if(url === '/'){
    // console.log('user hit the server');
    res.writeHead(200,{'content-type':'text/html'})
    // alternatively , we can still with res.write
    res.write(homePage)
    res.end()
  }
  //about
  else if(url === '/about'){
    // console.log('user hit the server');
    res.writeHead(200,{'content-type':'text/html'})
    // alternatively , we can still with res.write
    res.write('<h1>Hello about page</h1>')
    res.end()
  }
  // 404
  else{
    // console.log('user hit the server');
    res.writeHead(200,{'content-type':'text/html'})
    // alternatively , we can still with res.write
    res.write('<h1>Hello 404 page</h1>')
    res.write('<a href="/" >Back home</a>')
    res.end()
  }
  
})

server.listen(port)