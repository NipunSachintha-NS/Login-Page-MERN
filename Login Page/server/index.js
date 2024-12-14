const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/Login')

const UserSchema = new mongoose.Schema({
    email:String,
    password:String
})

const UserMOdel = mongoose.model("users", UserSchema)

app.post("/login", (req,res) =>{
    const {email, password} = req.body;
    UserMOdel.findOne({email:email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Login Succussfuly")
            } else {
                res.json("The password is incorrect")
            }
        } else {
            res.json("No record existed")  
        }
    })
    .catch(err => console.log(err))
})



app.listen(3001, () =>{
    console.log("Server is running")
})