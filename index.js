const express = require('expresss')
const dotenv = require('dotenv')
const PORT = 3000


const app = express()

app.use(express.json())


app.post('/signup', async(req,res)=>{
    try{
        const {username,Email,Password,DOB}=req.body
        if(!username){
            return res.status(400).json({message:"Username can not be empty"})
        }
        if(!Email){
            return res.status(400).json({message:"Email can not be empty"})
        }
        if(!Password){
            return res.status(400).json({message:"Password can not be empty"})
        }
        if(Password.length<8 || Password.length>16){
            return res.status(400).json({message:"Password length should be greater than  8 and less than or equal to  16"})
        }
        return res.status(200).json({message:"User created successfully",user : {...req.body}})


    }catch(err){
        es.status(500).json({error:"Internal server error"})
        
    }
})




app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})