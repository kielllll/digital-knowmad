const isAdmin = localStorage.getItem('isAdmin');
const userId = localStorage.getItem('userId');

// Select all navigation elements if user is logged-in
const userLoggedInElements = document.querySelectorAll('.user-is-in');

// Select all navigation elements if user is logged-out
const userLoggedOutElements = document.querySelectorAll('.user-is-out');

if(userId) {
  
}