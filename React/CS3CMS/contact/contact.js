document.addEventListener("DOMContentLoaded", ()=>{
  document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    let name = document.getElementById("contactName").value;
    let email = document.getElementById("contactEmail").value;
    let message = document.getElementById("contactMessage").value;

    if(!name || !email || !message){
      document.getElementById("contactMsg").innerText = "Please fill all fields!";
      return;
    }
    
    document.getElementById("contactMsg").innerText = "Message sent successfully!";
  });
});