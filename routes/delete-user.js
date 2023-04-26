const express=require("express");
const router=express.Router();
const controller=require("../controllers/delete-user")

router.delete("/delete-user/:id",controller.deleteUser)

module.exports=router;