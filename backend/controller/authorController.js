const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Author = require('../model/authorModel');
const SECRET_KEY = "FAIZZAPI1"

const authorSignup = async (req,res)=> {

    const {name,email, password} = req.body

    try{
        const existingUser = await Author.findOne({email})
        if(existingUser){
            return res.status(400).json({message:"User already exist"})
        }

        const hashPass = await bcrypt.hash(password,10);

        const result = await Author.create({
            name:name,
            email:email,
            password:hashPass
        })

        const token = jwt.sign({email: result.email, id:result._id}, SECRET_KEY);
        res.status(200).json({user:result, token:token})

    }catch(error){
        console.log(error)
    }
}

const authorSignin = async (req,res)=> {
    const {email, password} = req.body;

    try{
        const existingUser = await Author.findOne({email})
        if(!existingUser){
            return res.status(400).json({message:"User not found"})
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password);

        if(!matchPassword){
            res.status(400).json({message:"Invalid credentials"})
        }

        const token = jwt.sign({email: existingUser.email, id:existingUser._id}, SECRET_KEY);
        res.status(200).json({user:matchPassword, token:token})
    }catch(error){
        console.log(error)
        res.status(500).json({message:"Something went wrong"})
    }
}



  module.exports = {authorSignup,authorSignin}