// Login
const container = document.getElementById ('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () =>{
    container.classList.add("active");
});

loginBtn.addEventListener('click', () =>{
    container.classList.remove("active");
});

//Sign In
document.getElementById("loginForm").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    window.location.href = "produk.html";
  
    // Retrieve username and password
    // var username = document.getElementById("username").value;
    // var password = document.getElementById("password").value;
  
    // if (username === "example" && password === "password") {
    //   window.location.href = "toko.html";
    // } else {
    //   alert("Invalid username or password. Please try again.");
    // }
  });

  // Sign Up