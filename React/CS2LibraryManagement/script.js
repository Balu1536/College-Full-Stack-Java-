// Navbar login/logout toggle
document.addEventListener("DOMContentLoaded", ()=>{
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  if(isLoggedIn){
    document.getElementById("loginLink").style.display="none";
    document.getElementById("signupLink").style.display="none";
    document.getElementById("logoutLink").style.display="block";
  }
  document.getElementById("logoutLink").addEventListener("click", ()=>{
    localStorage.removeItem("isLoggedIn");
    window.location.href="index.html";
  });
});

