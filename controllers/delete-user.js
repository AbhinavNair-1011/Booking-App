const User=require("../models/users");

module.exports.deleteUser=(req,res,next)=>{
    let id=req.params.id;
   User.deleteFromDatabase(id)
   .then((user)=>{
    user.destroy();
    return res.json({status:"success",
deletedUser:user
})

})
.catch(err=>{
    if (err){
        return res.json({status:"failed",
    errorMsg:"dsnt exists in database"
})
    }
})
        
}