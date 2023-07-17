function checkAccess() {
  var accessCode = document.getElementById('accessCode').value;
  if (accessCode === 'password') {
    window.location.href = 'second-page.html';
  } else {
    alert('Incorrect access code. Please try again.');
  }
}
