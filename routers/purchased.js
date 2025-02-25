import express from 'express'
import PurchasedBookModel from '../schemas/PurchasedBookSchema.js'

const purchasedBookRouter = express.Router()

purchasedBookRouter.route('/')
.post(async (req,res)=>{
try{
    const {title,author,price,username} = req.body
    const newPurchasedBook =await new  PurchasedBookModel({title,author,price,username})
    await newPurchasedBook.save()
    res.json(newPurchasedBook)
}catch(err){
    res.status(400).send({ error: err.message });
}
})
.get( async (req,res)=>{
try{
  const purchasedBookDetails = await PurchasedBookModel.find()
  res.send(purchasedBookDetails)
  
}catch(err){
    console.log("Cannot get the purchased Books list ",err.message)
}
})


export default purchasedBookRouter