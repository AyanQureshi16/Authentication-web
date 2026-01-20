// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjAIrC5QuqUoOVP3eROyKw6ITsBm2dgnM", 
  authDomain: "firebase-authentication-e932b.firebaseapp.com",
  databaseURL: "https://firbase-1216-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "firebase-authentication-e932b",
  storageBucket: "firebase-authentication-e932b.appspot.com",
  messagingSenderId: "338927907572",
  appId: "1:338927907572:web:0b04c8106da4824d6786c5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

// AUTH STATE LISTENER - Ye check karega user logged in hai ya nahi
auth.onAuthStateChanged((user) => {
    const currentPage = window.location.pathname.split('/').pop();
    
    if (user) {
        // User logged in hai
        console.log("User logged in:", user.email);
        
        // Agar user login/signup page par hai to index.html par redirect karo
        if (currentPage === 'login.html' || currentPage === 'signup.html') {
            window.location.href = 'index.html';
        }
    } else {
        // User logged out hai
        console.log("No user logged in");
        
        // Agar user index.html par hai to login page par redirect karo
        if (currentPage === 'index.html' || currentPage === '') {
            window.location.href = 'login.html';
        }
    }
});

// --- SIGNUP LOGIC ---
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('semail').value;
        const password = document.getElementById('spassword').value;

        // Basic validation
        if (password.length < 6) {
            alert("Password must be at least 6 characters long");
            return;
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // Database mein user data save karna
                return database.ref('users/' + user.uid).set({
                    email: email,
                    createdAt: Date.now(),
                    lastLogin: Date.now()
                });
            })
            .then(() => {
                alert("Account Created Successfully!");
                // onAuthStateChanged automatically redirect karega
            })
            .catch((error) => {
                console.error("Signup Error:", error);
                alert("Signup Error: " + error.message);
            });
    });
}

// --- LOGIN LOGIC ---
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('lemail').value;
        const password = document.getElementById('lpassword').value;

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // Last login update karo
                return database.ref('users/' + user.uid).update({
                    lastLogin: Date.now()
                });
            })
            .then(() => {
                alert("Logged In Successfully!");
                // onAuthStateChanged automatically redirect karega
            })
            .catch((error) => {
                console.error("Login Error:", error);
                alert("Login Error: " + error.message);
            });
    });
}

// --- LOGOUT LOGIC (index.html ke liye) ---
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        auth.signOut()
            .then(() => {
                alert("Logged Out Successfully!");
                // onAuthStateChanged automatically redirect karega
            })
            .catch((error) => {
                console.error("Logout Error:", error);
                alert("Logout Error: " + error.message);
            });
    });
}

// --- GOOGLE SIGN IN ---
const googleLoginBtn = document.getElementById('google-login');
const googleSignupBtn = document.getElementById('google-signup');

if (googleLoginBtn) {
    googleLoginBtn.addEventListener('click', () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                return database.ref('users/' + user.uid).set({
                    email: user.email,
                    displayName: user.displayName,
                    lastLogin: Date.now()
                });
            })
            .then(() => {
                alert("Google Sign In Successful!");
            })
            .catch((error) => {
                console.error("Google Sign In Error:", error);
                alert("Google Sign In Error: " + error.message);
            });
    });
}

if (googleSignupBtn) {
    googleSignupBtn.addEventListener('click', () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                return database.ref('users/' + user.uid).set({
                    email: user.email,
                    displayName: user.displayName,
                    createdAt: Date.now(),
                    lastLogin: Date.now()
                });
            })
            .then(() => {
                alert("Google Sign Up Successful!");
            })
            .catch((error) => {
                console.error("Google Sign Up Error:", error);
                alert("Google Sign Up Error: " + error.message);
            });
    });
}

// --- GITHUB SIGN IN ---
const githubLoginBtn = document.getElementById('github-login');
const githubSignupBtn = document.getElementById('github-signup');

if (githubLoginBtn) {
    githubLoginBtn.addEventListener('click', () => {
        const provider = new firebase.auth.GithubAuthProvider();
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                return database.ref('users/' + user.uid).set({
                    email: user.email,
                    displayName: user.displayName,
                    lastLogin: Date.now()
                });
            })
            .then(() => {
                alert("GitHub Sign In Successful!");
            })
            .catch((error) => {
                console.error("GitHub Sign In Error:", error);
                alert("GitHub Sign In Error: " + error.message);
            });
    });
}

if (githubSignupBtn) {
    githubSignupBtn.addEventListener('click', () => {
        const provider = new firebase.auth.GithubAuthProvider();
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                return database.ref('users/' + user.uid).set({
                    email: user.email,
                    displayName: user.displayName,
                    createdAt: Date.now(),
                    lastLogin: Date.now()
                });
            })
            .then(() => {
                alert("GitHub Sign Up Successful!");
            })
            .catch((error) => {
                console.error("GitHub Sign Up Error:", error);
                alert("GitHub Sign Up Error: " + error.message);
            });
    });
}