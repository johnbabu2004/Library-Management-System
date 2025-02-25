import mongoose from 'mongoose'

const PurchasedBookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: String, required: true },
    username: { type: String, required:true }

})

const PurchasedBookModel = new mongoose.model('PurchasedBookModel',PurchasedBookSchema)

export default PurchasedBookModel