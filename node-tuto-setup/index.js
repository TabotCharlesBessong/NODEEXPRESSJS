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