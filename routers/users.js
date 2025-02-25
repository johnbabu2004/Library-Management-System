import express from 'express'
import User from '../schemas/UserSchema.js'

const userRouter = express.Router()

userRouter.route('/')
.post(async(req,res)=>{
    try{
      const {name,username,email,password,bio} = req.body
      const newUser = new User({name,username,email,password,bio})
      await newUser.save()
      console.log("hello..."+newUser.name)
      res.send(newUser)
    }catch(e){
         console.log(e.message)
    }
  }).get(async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
      console.log(err)
    }
  });

  export default userRouter;