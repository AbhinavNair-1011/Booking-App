const express=require("express");
const router=express.Router();
const controller=require("../controllers/add-user-controller")

router.post("/add-user",controller.addUser)
module.exports=router;
