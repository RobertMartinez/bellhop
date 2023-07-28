function checkKeyPress(event) {
  if (event.keyCode === 13) { // 13 is the key code for "Enter" key
    checkAccess();
  }
}

function checkAccess() {
  var accessCode = document.getElementById('accessCode').value.toLowerCase(); // Convert to lowercase
  var expectedCode = 'password'; // Expected password, you can change it as needed

  if (accessCode === expectedCode.toLowerCase()) { // Convert to lowercase for comparison
    // Set a flag to indicate successful access
    sessionStorage.setItem('accessGranted', 'true');
    window.location.href = 'second-page.html';
  } else {
    alert('So close, darling! Try again!');
  }
}
