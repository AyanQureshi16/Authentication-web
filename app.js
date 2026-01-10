import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
import { 
  getDatabase, 
  ref, 
  push, 
  onValue, 
  remove, 
  update 
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";
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
  databaseURL: "https://firbase-1216-default-rtdb.asia-southeast1.firebasedatabase.app", 
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
const database = getDatabase(app);

// Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// Global variables
let currentUserId = null;
let todoId = null;

// --- AUTH STATE LISTENER (Handles Redirects) ---
onAuthStateChanged(auth, (user) => {
  const currentPath = window.location.pathname;
  
  if (user) {
    // Set current user ID
    currentUserId = user.uid;
    console.log("User logged in:", user.uid);
    
    // Load todos if on index page
    if (currentPath.includes("index.html") || currentPath === "/" || currentPath.endsWith("/")) {
      loadTodos();
    }
    
    // If on login or signup pages, go to index
    if (currentPath.includes("login.html") || currentPath.includes("signup.html")) {
       window.location.href = "./index.html";
    }
  } else {
    // User is signed out
    currentUserId = null;
    
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
    event.preventDefault();
    
    const email = document.getElementById("lemail").value;
    const password = document.getElementById("lpassword").value;
    
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert(`Welcome back ${user.email}!`);
        window.location.href = "./index.html";
      })
      .catch((error) => {
        alert("Login failed: " + error.message);
      });
  });
}

// 4. Email/Password Signup (Signup Page)
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
      window.location.href = "./login.html";
    });
  });
}

// ========================================
// REALTIME DATABASE - TODO LIST
// ========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  const submitBtn = document.getElementById("submitBtn");
  const todoInp = document.getElementById("todoInp");

  // Create/Update Todo
  if (submitBtn && todoInp) {
    console.log("Submit button found and event listener attached");
    
    submitBtn.addEventListener("click", function() {
      console.log("Submit button clicked!");
      console.log("Current User ID:", currentUserId);
      
      if (!currentUserId) {
        alert("Please log in first!");
        return;
      }

      const todoText = todoInp.value.trim();
      console.log("Todo text:", todoText);
      
      if (!todoText) {
        alert("Please enter a todo!");
        return;
      }

      if (submitBtn.innerText === "Submit") {
        // Create new todo
        console.log("Creating new todo...");
        const todoRef = ref(database, `todos/${currentUserId}`);
        push(todoRef, {
          text: todoText,
          completed: false,
          timestamp: Date.now()
        })
        .then(() => {
          console.log("Todo created successfully!");
          todoInp.value = "";
        })
        .catch((error) => {
          console.error("Error creating todo:", error);
          alert("Error creating todo: " + error.message);
        });
      } else {
        // Update existing todo
        console.log("Updating todo...");
        update(ref(database, `todos/${currentUserId}/${todoId}`), {
          text: todoText
        })
        .then(() => {
          console.log("Todo updated successfully!");
          todoInp.value = "";
          submitBtn.innerText = "Submit";
          todoId = null;
        })
        .catch((error) => {
          console.error("Error updating todo:", error);
          alert("Error updating todo: " + error.message);
        });
      }
    });
  } else {
    console.log("Submit button or input not found!");
  }
});

// Load and Display Todos
function loadTodos() {
  const todoList = document.getElementById("todoList");
  
  if (!currentUserId || !todoList) {
    console.log("Cannot load todos - missing userId or todoList element");
    return;
  }

  console.log("Loading todos for user:", currentUserId);
  const todoRef = ref(database, `todos/${currentUserId}`);
  
  onValue(todoRef, (snapshot) => {
    todoList.innerHTML = "";
    
    if (!snapshot.exists()) {
      todoList.innerHTML = "<li style='list-style: none; text-align: center; padding: 20px; color: #718096;'>No todos yet. Add your first task!</li>";
      return;
    }

    snapshot.forEach((childSnapshot) => {
      const todo = childSnapshot.val();
      const key = childSnapshot.key;
      
      todoList.innerHTML += `
        <li class="todo-item">
          <p class="todo-text" style="color: ${todo.completed ? '#a0aec0' : '#2d3748'}; text-decoration: ${todo.completed ? 'line-through' : 'none'};">${todo.text}</p>
          <div class="todo-actions">
            <button onclick="toggleComplete('${key}', ${todo.completed})" class="todo-btn" style="background: ${todo.completed ? '#48bb78' : '#edf2f7'}; color: ${todo.completed ? 'white' : '#4a5568'};">
              ${todo.completed ? '✓' : '○'}
            </button>
            <button onclick="updateTodo('${key}', \`${todo.text.replace(/`/g, '\\`')}\`)" class="todo-btn" style="background: #667eea; color: white;">Edit</button>
            <button onclick="deleteTodo('${key}')" class="todo-btn" style="background: #f56565; color: white;">Delete</button>
          </div>
        </li>
      `;
    });
  }, (error) => {
    console.error("Error loading todos:", error);
    todoList.innerHTML = "<li style='list-style: none; text-align: center; padding: 20px; color: #e53e3e;'>Error loading todos. Please check Firebase configuration.</li>";
  });
}

// Toggle Complete Status
window.toggleComplete = function(id, currentStatus) {
  if (!currentUserId) return;
  
  update(ref(database, `todos/${currentUserId}/${id}`), {
    completed: !currentStatus
  })
  .then(() => {
    console.log("Todo completion toggled");
  })
  .catch((error) => {
    console.error("Error toggling todo:", error);
  });
}

// Delete Todo
window.deleteTodo = function(id) {
  if (!currentUserId) return;
  
  if (confirm("Are you sure you want to delete this todo?")) {
    remove(ref(database, `todos/${currentUserId}/${id}`))
      .then(() => {
        console.log("Todo deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting todo:", error);
        alert("Error deleting todo: " + error.message);
      });
  }
}

// Update Todo (Edit Mode)
window.updateTodo = function(id, oldText) {
  const todoInp = document.getElementById("todoInp");
  const submitBtn = document.getElementById("submitBtn");
  
  if (!todoInp || !submitBtn) return;
  
  todoInp.value = oldText;
  submitBtn.innerText = "Update";
  todoId = id;
  
  // Scroll to input
  todoInp.scrollIntoView({ behavior: 'smooth', block: 'center' });
  todoInp.focus();
}