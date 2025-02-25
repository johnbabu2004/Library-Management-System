import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name:String,
    username:String,
    email:String,
    password:String,
    bio : String,
})
const User =new mongoose.model('User',UserSchema)
export default User