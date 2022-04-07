
const getAllProductsStatic = async (req,res)=>{
  res.status(200).json({msg:'Products testing routes'})
}
const getAllProducts = async (req,res)=>{
  res.status(200).json({msg:'Products  routes'})
}

module.exports = {
  getAllProducts,
  getAllProductsStatic
}