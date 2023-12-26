export function validateUsername(username) {
  return /^[A-Za-z0-9]+$/.test(username);
}

export function validatePassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);
}
