import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut 
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBjAIrC5QuqUoOVP3eROyKw6ITsBm2dgnM",
  authDomain: "firbase-1216.firebaseapp.com",
  projectId: "firbase-1216",
  storageBucket: "firbase-1216.firebasestorage.app",
  messagingSenderId: "674272414750",
  appId: "1:674272414750:web:2bf4c4923a58fe000db20f",
  measurementId: "G-C443K0D00X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// --- AUTH STATE LISTENER (Handles Redirects) ---
onAuthStateChanged(auth, (user) => {
  const currentPath = window.location.pathname;
  
  if (user) {
    // User is signed in
    localStorage.setItem("isLoggedIn", "true"); // Fix for index.html check
    
    // If on login or signup pages, go to index
    if (currentPath.includes("login.html") || currentPath.includes("signup.html")) {
       window.location.href = "./index.html";
    }
  } else {
    // User is signed out
    localStorage.removeItem("isLoggedIn");
    
    // If on index page, go to login
    if (currentPath.includes("index.html") || currentPath === "/" || currentPath.endsWith("/")) {
      window.location.href = "./login.html";
    }
  }
});

// --- SOCIAL LOGIN FUNCTION ---
function handleSocialLogin(provider, providerName) {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(`${providerName} login successful!`, user);
      localStorage.setItem("isLoggedIn", "true"); // SAVE LOGIN STATE
      alert(`Welcome ${user.displayName || user.email}!`);
      window.location.href = "./index.html";
    })
    .catch((error) => {
      console.error(`${providerName} login error:`, error);
      if (error.code === 'auth/account-exists-with-different-credential') {
        alert(`This email is already registered with another method.`);
      } else {
        alert(`${providerName} login failed: ${error.message}`);
      }
    });
}

// --- BUTTON EVENT LISTENERS ---

// 1. Social Login Buttons (Login Page)
const googleLoginBtn = document.querySelector("#google-login");
const githubLoginBtn = document.querySelector("#github-login");

if (googleLoginBtn) googleLoginBtn.addEventListener("click", () => handleSocialLogin(googleProvider, "Google"));
if (githubLoginBtn) githubLoginBtn.addEventListener("click", () => handleSocialLogin(githubProvider, "GitHub"));

// 2. Social Signup Buttons (Signup Page)
const googleSignupBtn = document.querySelector("#google-signup");
const githubSignupBtn = document.querySelector("#github-signup");

if (googleSignupBtn) googleSignupBtn.addEventListener("click", () => handleSocialLogin(googleProvider, "Google"));
if (githubSignupBtn) githubSignupBtn.addEventListener("click", () => handleSocialLogin(githubProvider, "GitHub"));

// 3. Email/Password Login (Login Page)
const loginBtn = document.querySelector("#login-btn");
if (loginBtn) {
  loginBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Stop form reload
    
    const email = document.getElementById("lemail").value;
    const password = document.getElementById("lpassword").value;
    
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("isLoggedIn", "true"); // SAVE LOGIN STATE
        alert(`Welcome back ${user.email}!`);
        window.location.href = "./index.html";
      })
      .catch((error) => {
        alert("Login failed: " + error.message);
      });
  });
}

// 4. Email/Password Signup (Signup Page)
// Note: Changed from window.signup to event listener for module safety
const signupBtn = document.querySelector("button[onclick='signup()']"); 
// If you want to keep using onclick="signup()" in HTML, you must attach it to window explicitly:
window.signup = function() {
  const email = document.getElementById("semail").value;
  const password = document.getElementById("spassword").value;
  
  if (!email || !password) {
    alert("Please fill in all fields");
    return;
  }
  
  if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return;
  }
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      localStorage.setItem("isLoggedIn", "true"); // SAVE LOGIN STATE
      alert("Account created! Redirecting...");
      window.location.href = "./index.html";
    })
    .catch((error) => {
      alert("Signup failed: " + error.message);
    });
}

// 5. Logout (Index Page)
const logoutBtn = document.getElementById("logout");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    signOut(auth).then(() => {
      localStorage.removeItem("isLoggedIn");
      window.location.href = "./login.html";
    });
  });
}