import mongoose from 'mongoose'

const RentedBooksSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    rental_price: { type: String, required: true },
    username: { type: String, required:true }
});
const  RentedBooksModel = new mongoose.model('RentedBooksModel',RentedBooksSchema)
export default RentedBooksModel