const Users=require("../models/users");

module.exports.fetchUser=(req,res,next)=>{
    Users.fetchAll().then((data)=>{
        
if(!data.length<1){
    
       return res.status(200).json({status:"success",
       data:data
})
}else{
   return  res.status(404).json({status:"failed",
   errorMsg:"no users exist"})
}
       
    })
    .catch(err=>{
        return res.status(404).json({status:"failed",
        errorMsg:err
            })
  
})
}