const express=require("express");
const router=express.Router();
const controller=require("../controllers/fetchUser")

router.get("/fetch-users",controller.fetchUser)

module.exports=router;