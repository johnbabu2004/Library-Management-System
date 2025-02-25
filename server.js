import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import userRouter from './routers/users.js'
import rentedBooksRouter from './routers/rented.js'
import purchasedBookRouter from './routers/purchased.js'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));  
app.use('/users',userRouter)
app.use('/rented',rentedBooksRouter)
app.use('/purchased',purchasedBookRouter)

const connectDB = async () => {
  try {
      await mongoose.connect('mongodb://127.0.0.1:27017/bookhub');
      console.log('MongoDB Connected');
  } catch (err) {
      console.error('MongoDB connection failed:', err);
      process.exit(1); 
  }
};


connectDB();


app.listen(PORT,()=>{
  console.log(`Port is running on http:/localhost:${PORT}`);
});