export const validateSignupDetails = ({
  firstname,
  email,
  lastname,
  password,
}) => firstname && email && lastname && password;
