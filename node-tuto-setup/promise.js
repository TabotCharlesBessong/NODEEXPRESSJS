

const util = require('util')
const {readFile} = require('fs');

const getText = (path)=>{
  return new Promise((resolve,reject)=>{
    readFile(path,'utf-8',(err,data)=>{
      if(err){
        console.log(err);
        reject(err)
      }else{
        resolve(data);
      }
    })
  })
}

// The promisse way
// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch((err)=>console.log(err))

// The async try and catch way
const start = async ()=>{
  try {
    const second = await getText('./content/second.txt')
    console.log(second)
    const first = await getText('./content/first.txt')
    console.log(first)
  } catch (error) {
    console.log(error)
  }
  
}

start()