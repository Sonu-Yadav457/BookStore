import { User } from "../models/usser.models.js"
import bcryptjs from 'bcryptjs'
export const signup = async (req,res,next) => {
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message:"The user already exists"});
        }
        else{
            const hashPassword =await bcryptjs.hash(password,10);
            const createdUser = new User({
                email:email,
                password:hashPassword
            })
            await createdUser.save()
            res.status(201).json({message:"User Created Succcesfully",user:{
                _id:createdUser._id,
                email:createdUser.email,
            }});
        }
    } catch (error) {
        console.log('Error:',error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export const login = async (req,res,next) => {
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bcryptjs.compare(password,user.password);
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid username or password"});
        }
        else{
            return res.status(200).json({message:"Login succesful",user:{
                _id:user._id,
                email:user.email,

            }});
        }
    } catch (error) {
        console.log('Error:',error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}