document.addEventListener("DOMContentLoaded", ()=>{
  document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    let email=document.getElementById("loginEmail").value;
    let password=document.getElementById("loginPassword").value;
    let user=JSON.parse(localStorage.getItem("user"));

    if(user && user.email===email && user.password===password){
      localStorage.setItem("isLoggedIn", true);
      window.location.href="../Home/home.html";
    } else {
      document.getElementById("loginMessage").innerText="Invalid credentials!";
    }
  });
});