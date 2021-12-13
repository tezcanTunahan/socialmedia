export const loginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const loginSucces = (user) => ({
  type: "LOGIN_SUCCES",
  payload: user,
});

export const loginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});
