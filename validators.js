// src/utils/validators.js

export const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const validateItemForm = (data) => {
  return data.title && data.description && data.category && data.size;
};
