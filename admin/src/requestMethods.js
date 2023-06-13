import axios from "axios";

const BASE_URL = "http://localhost:8080/api/";
// Retrieve the currentUser and access token from local storage

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

// Create an axios instance for public requests (no authentication required)
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
// Create an axios instance for user-specific requests (authentication required)
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
