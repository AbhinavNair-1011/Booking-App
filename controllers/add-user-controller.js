const Users=require("../models/users");


module.exports.addUser=(req,res,next)=>{
    
    let user= new Users(req.body.name,req.body.email,req.body.phone,req.body.date)
       user.insertIntoDatabase()
       .then((data)=>{

      
        return res.json(data)
      })
       
       .catch(err=>{
         if(err){
            return res.json({status:"failed",
         errorMsg:err
      })
         }
       })
          
    }
    
    
    