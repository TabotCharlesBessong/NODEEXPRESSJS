
const authorised = (req,res,next)=>{
  const {user} = req.query
  if(user === 'John'){
    req.user = {name:'John',id:3}
    next()
  }else{
    res.status(401).send('Not autorised')
  }
  console.log('authority')
  next()
}

module.exports = authorised