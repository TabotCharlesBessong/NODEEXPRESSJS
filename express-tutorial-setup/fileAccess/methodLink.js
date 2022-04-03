

const http = require('http')
const {readFileSync} = require('fs')
const port = 5000
const server = http.createServer((req,res)=>{
  // console.log(req);
  // console.log(req.url);
  // console.log(req.method);

  // get all filess
  const homePage = readFileSync('./navbar-app/index.html')
  const homeStyles = readFileSync('./navbar-app/styles.css')
  const homeImage = readFileSync('./navbar-app/logo.svg')
  const homeLogic = readFileSync('./navbar-app/browser-app.js')
  const homeFa = readFileSync('./navbar-app/font-awesome/css/all.min.css')

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
  // styles
  else if(url === '/styles.css'){
    // console.log('user hit the server');
    res.writeHead(200,{'content-type':'text/css'})
    // alternatively , we can still with res.write
    res.write(homeStyles)
    res.end()
  }
  // FA
  else if(url === '/font-awesome/css/all.min.css'){
    // console.log('user hit the server');
    res.writeHead(200,{'content-type':'text/css'})
    // alternatively , we can still with res.write
    res.write(homeFa)
    res.end()
  }

  // Logic
  else if(url === '/browser-app.js'){
    // console.log('user hit the server');
    res.writeHead(200,{'content-type':'text/javascript'})
    // alternatively , we can still with res.write
    res.write(homeLogic)
    res.end()
  }
  
  // images
  else if(url === '/logo.svg'){
    // console.log('user hit the server');
    res.writeHead(200,{'content-type':'image/svg+xml'})
    // alternatively , we can still with res.write
    res.write(homeImage)
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