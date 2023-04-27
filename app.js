const express=require("express");
const app=express();
const cors=require("cors");
const bodyParser=require("body-parser"); 

const Sequelize=require("sequelize").Sequelize;
const sequelize=require("./database/database");

const addUser=require("./routes/add-user");
const fetchUser=require("./routes/fetch-users");
const deleteUser=require("./routes/delete-user")
// const create=require("./database/create table")


app.use(express.static(__dirname+"/public"));
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json({extended:false}))


app.get("/",(req,res)=>{
res.status(200).sendFile(__dirname+"/views/forms_sharpener.html")
})
app.use(addUser)
app.use(fetchUser);
app.use(deleteUser)

sequelize.sync()
.then()
.catch(err=> console.log(err))

module.exports=app;