const togglePassword = document.querySelector("#togglePassword");
const password = document.getElementById("exampleInputPassword1");
const email=document.getElementById("exampleInputEmail1");
const phone=document.getElementById("mobile");
const check=document.getElementById("exampleCheck1");
const check2=document.getElementById("exampleCheck2");
var mailvxv=false;
var passvxv=false;

const form=document.getElementById("form-reg");
togglePassword.addEventListener("click", function () {
   
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    

    this.classList.toggle("bi-eye");
});
function validationForm(event){
    event.preventDefault();
    if (email.value == null || email.value == "") {
        document.getElementById("emailErr").textContent="The email field is required."
      } else if (
        !email.value.match(
            /^\S+@\S+\.\S+$/
        )
      ) {
        document.getElementById("emailErr").textContent =
          "The email must be a valid email address.";
        
      } else { mailValue=email.value
        document.getElementById("emailErr").textContent = "";
        mailvxv=true;

        
      }
      if (phone.value == "" || phone.value == null) {
        document.getElementById("mobileErr").textContent =
          "The Mobile field is required.";
        
      } else if (phone.value.length < 10) {
        document.getElementById("mobileErr").textContent =
          "The mobile must be 10 characters.";
        
      } else {
        document.getElementById("mobileErr").textContent = "";
      }
  
      if (password.value == '' || password.value == null) {
        document.getElementById("passErr").textContent = "The password field is required.";
        
      }else if(password.value.length <6 ){
        document.getElementById("passErr").textContent = "The password must be at least 6 characters.";
        
      }else if(password.value.length >18){
        document.getElementById("passErr").textContent = "The password may not be greater than 18 characters.";
        
      }else{ passValue=password.value
        document.getElementById("passErr").textContent = "";

        passvxv=true;
     
      }

if(check.checked==false){
    document.getElementById("checkErr").textContent = "you should check";
}else{
    document.getElementById("checkErr").textContent = "";
}

if(mailvxv==true&&passvxv==true){
  let formData = JSON.parse(localStorage.getItem('formData')) || [];
  formData.push({ mailValue, passValue});
  localStorage.setItem('formData', JSON.stringify(formData));


 }


}
var m ="";
var b = "";
function sign(event){
 

  event.preventDefault();
  if (email.value == null || email.value == "") {
      document.getElementById("emailErr").textContent="The email field is required."
    } else if (
      !email.value.match(
          /^\S+@\S+\.\S+$/
      )
    ) {
      document.getElementById("emailErr").textContent =
        "The email must be a valid email address.";
      
    } else { m=email.value
      document.getElementById("emailErr").textContent = "";
     
      
    }
    if (password.value == '' || password.value == null) {
      document.getElementById("passErr").textContent = "The password field is required.";
      
    }else if(password.value.length <6 ){
      document.getElementById("passErr").textContent = "The password must be at least 6 characters.";
      
    }else if(password.value.length >18){
      document.getElementById("passErr").textContent = "The password may not be greater than 18 characters.";
      
    }else{ b=password.value
      document.getElementById("passErr").textContent = "";

     
   
    }
    users = JSON.parse(localStorage.getItem("formData") || "[]");
  
    obj={};
    for(i=0;i<users.length;i++){
      obj= users[i];
      


      if(m !==obj.mailValue  && b!==obj.passValue ){
       console.log("nooo") ;
      }
      else{
      window.sessionStorage.setItem("mailValue",obj.mailValue);
      
      console.log(sessionStorage)
        
      
        
        break;
      }

}

}






//var passs = ""
//var mailsss = ""

//for ( i=0; i<users.length ; i ++){ o=users[i] 
 // passs=o.passValue; 
  //mailsss=o.mailValue;
//if ( passs == passValue && mailsss == mailValue){

//window.sessionStorage.setItem ("passValue",passs)
//window.sessionStorage.setItem ("mailValue",mailsss)
//}
//}

//console.log(window.sessionStorage);
//}