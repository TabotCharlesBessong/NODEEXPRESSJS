
const EventEmitter = require('events')

const customEmitter = new  EventEmitter()

// we can have as many dunction listening to events 
customEmitter.on('response',(name,id)=>{
  console.log(`Data received ${name} and my ID is ${id}  `);
})

customEmitter.on('response',(name , id)=>{
  console.log(`Data received hello there ${name} and my ID is ${id} `);
})

customEmitter.emit('response','John',35)