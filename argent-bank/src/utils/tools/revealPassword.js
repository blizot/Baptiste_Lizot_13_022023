function revealPassword() {
  const passwordField = document.getElementById('form-password')
  passwordField.type = passwordField.type === 'password' ? 'text' : 'password'
}

export default revealPassword
