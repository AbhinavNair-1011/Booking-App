const Sequelize=require("sequelize").Sequelize;

const sequelize= new Sequelize("booking_application","root","Abhinav@1011",{
    dialect:"mysql",
    host:"localhost"
});



module.exports=sequelize;