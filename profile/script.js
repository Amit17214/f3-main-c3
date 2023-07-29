const fName = document.getElementById('fName');
const emailId = document.getElementById('emailID');
const Password = document.getElementById('Password');

let currentUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

fName.innerText = currentUser.firstName;
emailId.innerText = currentUser.email;
Password.innerText = currentUser.password;