import * as actionTypes from "./actionTypes";
import alertify from "alertifyjs";

export function registerUserSuccess(user) {
  alertify.success("Kayıt işlemi gerçekleştirildi. Giriş yapabilirsiniz.");
  return { type: actionTypes.REGISTER_USER, payload: user };
}

export function registerUserApi(user) {
  return fetch("https://localhost:**/api/auth/register", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function loginUserApi(user) {
  return fetch("https://localhost:**/api/auth/login", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function registerUser(user) {
  return function(dispatch) {
    return registerUserApi(user)
      .then(user => {
        dispatch(registerUserSuccess(user));
      })
      .catch(error => {
        //throw error;
        setTimeout(errorRouting(), 1000);
      });
  };
}

export function loginUser(user) {
  return function() {
    return loginUserApi(user)
      .then(res => {
        const token = res.token;
        localStorage.setItem("userId", res.userId);
        localStorage.setItem("jwtToken", token);
        setTimeout(urlRouting(), 500);
      })
      .catch(error => {
        //throw error;
        setTimeout(errorRouting(), 1000);
      });
  };
}

export async function handleResponse(response) {
  if (response.ok) {
    console.log(response.json);
    return response.json();
  }
  const error = await response.text();
  throw new Error(error);
}

export function handleError(error) {
  console.error("Bir hata oluştu");
  throw error;
}

function urlRouting() {
  window.location = "http://localhost:*/journey-select";
}

function errorRouting() {
  window.location = "http://localhost:*/notfound";
}
