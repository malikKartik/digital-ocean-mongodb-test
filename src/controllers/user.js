const mongoose = require("mongoose")
const User = require('../models/user')

exports.createUser = (req,res,next) =>{
    const user = new User({
        _id:mongoose.Types.ObjectId(),
        email: req.body.email,
        name: req.body.name
    })
    user.save().then(data=>{
        res.json(data)
    }).catch(e=>{
        console.log(e)
        res.status(500).json({error:e})
    })
}

exports.getUsers = (req,res,next) =>{
    User.find().then(data=>{
        res.json(data)
    }).catch(e=>{
        console.log(e)
        res.status(500).json({error:e})
    })
}