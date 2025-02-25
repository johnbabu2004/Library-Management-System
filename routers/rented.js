import express from 'express'
import RentedBooksModel from '../schemas/RentedBooksSchema.js';
const rentedBooksRouter = express.Router();

rentedBooksRouter.route('/')
.post(async(req,res)=>{

    try{
      const {username,title,author,rental_price} = req.body
      const NewRentedBook = await new RentedBooksModel({username,title,author,rental_price})
      await NewRentedBook.save()
      res.json(NewRentedBook)
    }catch(err){
        res.status(400).send({ error: err.message });
    }
}).get(async(req,res)=>{
    try{
        const rentedBooks = await RentedBooksModel.find()
        res.send(rentedBooks)
    }catch(err){
        console.log("Cannot get the rented Books list ",err.message)
    }
})

export default rentedBooksRouter