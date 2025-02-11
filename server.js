import express from 'express';
import cors from 'cors'
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors())

app.get('/user',(req,res)=>{
  res.json({
    "name":"John",
    "age":21,
    "married":false
  })
})
app.listen(PORT,()=>{
  console.log(`Port is running on http:/localhost:${PORT}`);
});