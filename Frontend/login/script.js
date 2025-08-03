const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// Signup Functionality
document.querySelector(".sign-up-container form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission
  
  let name = document.querySelector(".sign-up-container input[type='text']").value;
  let email = document.querySelector(".sign-up-container input[type='email']").value;
  let password = document.querySelector(".sign-up-container input[type='password']").value;

  if (name && email && password) {
    let users = JSON.parse(localStorage.getItem("users")) || []; // Retrieve existing users
    let existingUser = users.find(user => user.email === email);

    if (existingUser) {
      alert("Email already exists! Try logging in.");
    } else {
      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users)); // Save updated users list
      alert("Signup successful! Now, sign in.");
      
      // Automatically switch to sign-in panel
      container.classList.remove("right-panel-active");

      // Autofill email in the sign-in form for convenience
      document.querySelector(".sign-in-container input[type='email']").value = email;
    }
  } else {
    alert("Please fill in all fields.");
  }
});

// Signin Functionality
document.querySelector(".sign-in-container form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission
  
  let email = document.querySelector(".sign-in-container input[type='email']").value;
  let password = document.querySelector(".sign-in-container input[type='password']").value;
  
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let validUser = users.find(user => user.email === email && user.password === password);

  if (validUser) {
    alert("Login successful! Welcome, " + validUser.name);
    // Redirect the user or perform other actions after login
  } else {
    alert("Invalid email or password.");
  }
});