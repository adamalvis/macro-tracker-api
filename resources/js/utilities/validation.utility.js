export const isValidEmail = (email) => {
  const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regex.test(email.toLowerCase());
};

export const isValidPassword = (password) => {
  const PASSWORD_MIN_LENGTH = 8;
  const regex = /^[A-Za-z0-9\&\@\$\*]+$/g;
  return regex.test(password) && password.length >= PASSWORD_MIN_LENGTH;
};