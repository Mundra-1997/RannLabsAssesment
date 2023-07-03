const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Publisher = require('../model/publisherModel');
const SECRET_KEY = "FAIZZAPI"

const publisherSignup = async (req,res)=> {

    const {name,email, password, organizationName} = req.body

    try{
        const existingUser = await Publisher.findOne({email})
        if(existingUser){
            return res.status(400).json({message:"User already exist"})
        }

        const hashPass = await bcrypt.hash(password,10);

        const result = await Publisher.create({
            name:name,
            email:email,
            organizationName:organizationName,
            password:hashPass
        })

        const token = jwt.sign({email: result.email, id:result._id}, SECRET_KEY);
        res.status(200).json({user:result, token:token})

    }catch(error){
        console.log(error)
    }
}

const publisherSignin = async (req,res)=> {
    const {email, password} = req.body;

    try{
        const existingUser = await Publisher.findOne({email})
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

module.exports = {publisherSignup, publisherSignin}