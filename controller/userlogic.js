const User=require('../model/user')

exports.getUserDetails=async (req,res,next)=>{
    User.findAll()
     .then(users=>{
        res.status(200).json({userDetails: users})
     })
     .catch(err=>{
        console.log(err)
     })
}

exports.postUserDetails=async (req,res,next)=>{
    try{
        if(req.body.name=="" || req.body.phone=="" || req.body.email==""){
            throw new Error('something went wrong')
        }
        console.log(req.body)
        const name=req.body.name
        const phonenumber=req.body.phone
        const email=req.body.email
        const data=await User.create({
            name:name,
            email:email,
            phonenumber:phonenumber
        })
       
            res.status(201).json({newUserDetails: data})
            console.log('NEW USER UPDATED!')
    }
    
    catch(err){
        res.status(500).json({
            error:err
        })
    }
}

exports.deleteUser=async (req,res,next)=>{
    try{
        if(!req.params.id){
            console.log('id is missing')
            res.status(400).json({err:'id is missing'})
        }
        const Uid=req.params.id
        await User.destroy({where: {id:Uid}})
        res.status(200).send('user deleted')
       
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}