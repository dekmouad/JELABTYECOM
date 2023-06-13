import axios from "axios";

const BASE_URL = "http://localhost:8080/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";


// Retrieve the access token from localStorage

const user = JSON.parse(localStorage.getItem("persist:root"))?.utilisateur;
const currentUser = user && JSON.parse(user).utilisateursCourant;
const TOKEN = currentUser?.accessToken;
console.log(TOKEN)// Log the retrieved access token

// Create an axios instance for public requests

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
// Create an axios instance for user requests, including the access token in the headers

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
