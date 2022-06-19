let container = document.querySelector(".container"),
signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });


   
    document.querySelector("#signbtn").addEventListener("click", all);
  let Data = JSON.parse(localStorage.getItem("SignData"))||[];
  function all() {
    let LoginName = document.querySelector("#FirstName").value;
    let Loginemail = document.querySelector("#Useremail").value;
    let Loginpassword = document.querySelector("#Userpassword").value;

    console.log(LoginName,Loginemail,Loginpassword);
      if (
        LoginName === "" ||
        Loginemail === "" ||
        Loginpassword === "" 
    
      ) {
        alert("Please Enter All the Details");
        window.location.reload();
      } else {
        myobj = {
          Email: Loginemail,
          Password: Loginpassword,
          Name:LoginName
        };

        Data.push(myobj);
        localStorage.setItem("SignData", JSON.stringify(Data));
        alert("SignUp Successfull");
       location.reload();
      }
    }
  

    document.getElementById("logbtn").addEventListener("click",function(){
      let x=document.getElementById("logemail").value;
      let y=document.getElementById("logpass").value;
      
      let flag=0;
      for(let i=0;i<Data.length;i++){
        
        if(Data[i].Email===x && Data[i].Password===y){
          
          flag++;
          
        }
        
      }
      if(flag>0){
        alert("Login Successfull");
        location.href="index.html";
      }
      else{
        alert("Incorrect Credentials");
      }

    });

