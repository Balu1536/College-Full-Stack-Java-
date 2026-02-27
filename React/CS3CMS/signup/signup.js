let newUser = { Firstname, lastname, email, password };

document.addEventListener("DOMContentLoaded", ()=>{
  document.getElementById("signupFromForm").addEventListener("submit", function(e){
    e.preventDefault();
    let Firstname=document.getElementById("fname").value;
    let lastname=document.getElementById("lname").value;
    let email=document.getElementById("loginEmail").value;
    let password=document.getElementById("loginPassword").value;

    localStorage.setItem("user", JSON.stringify(newUser));
    window.location.href= "../login/login.html";
  });
});