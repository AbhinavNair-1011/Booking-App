
async function fetchFromDatabase(){

const data= await axios.get("http://localhost:3000/fetch-users")

return data;
}
async function addToDatabase(userDetails){
  return  await axios.post("http://localhost:3000/add-user", userDetails)
}
async function deleteFromDatabase(id){
   return await axios.delete(`http://localhost:3000/delete-user/${id}`)
}

document.addEventListener("DOMContentLoaded", function () {

   let submitBtn=document.querySelector("#formSubmit")
    let name1 = document.querySelector("#name");
    let email1 = document.querySelector("#email");
    let phno1 = document.querySelector("#phone");
    let date1 = document.querySelector("#date");
    let tBody = document.querySelector("#usertable_body");



    fetchFromDatabase().then((res) => {
                
                res.data.data.forEach((each) => {
                    let tr = document.createElement("tr");


                    for (prop in each) {
                        if (prop === "delete" || prop === "createdAt" || prop === "updatedAt") {
                            continue;
                        }
                        let td = document.createElement("td");
                        td.appendChild(document.createTextNode(each[prop]))
                        tr.appendChild(td);
                    }
                    let deleteBtn = document.createElement("button");

                    deleteBtn.appendChild(document.createTextNode("Delete"))
                    deleteBtn.setAttribute("class", "delete");
                    deleteBtn.style.margin = "10px";
                    tr.appendChild(deleteBtn)
                    tBody.appendChild(tr)



                })


              
            
            })


            submitBtn.addEventListener("click", (e) => {
                e.preventDefault();
        
                if (name1.value !== "" && email1.value !== "" && phno1.value !== "") {
        
        
                    let userDetails = {
                        name: name1.value,
                        email: email1.value,
                        phone: phno1.value,
                        date: date1.value,
                      
                    }
        
        
                   
                    addToDatabase(userDetails)
                    .then((res)=>console.log(res) )
                    .catch(err => console.log(err))
        
                    name1.value = ""
                    email1.value = ""
                    phno1.value = ""
                    date1.value = ""
                    alert("Thankyou for the information we will get back to you soon!")
                  
        
        
        
                } else {
                    alert("please enter all the details")
                }
               
        
        
            });
        
           
        
             
        
        
        
            let dataTable = document.querySelector("table");
            
            dataTable.addEventListener("click", (e) => {
              
                if (e.target.classList.contains("delete")){
                    console.log(e)
                e.target.parentElement.style.display = "none"
                let id = e.target.parentElement.firstChild.innerText;
        
               deleteFromDatabase(id)
                .then()
                .catch(err => {
                    console.log(err)
                }) 
                }
        
        
            })
    


    
})