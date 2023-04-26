const Sequelize=require("sequelize");
const sequelize=require("../database/database");


const usersTable=sequelize.define("users",{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    
        
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    email:{
        type:Sequelize.STRING,
         
         unique:true
    },
    phoneNo:{
     type:Sequelize.BIGINT
    },
    date:{
        type:Sequelize.DATE,
        allowNull:false,
    }
    
})


class Users{
    constructor(name,email,phoneNo,date){
        this.name=name;
        this.email=email;
        this.phoneNo=phoneNo;
        this.date=date;
    }
     insertIntoDatabase(){
      return  usersTable.create({
           name:this.name,
           email:this.email,
           phoneNo:this.phoneNo,
           date:this.date

        })

    }

    static deleteFromDatabase(id){
    return usersTable.findByPk(id)
     
    

    }

    static fetchAll(){
       return usersTable.findAll()
        }

}

module.exports=Users;