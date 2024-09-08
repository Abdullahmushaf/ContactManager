import axios from "axios";

// Create an Axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/v1/", // Replace with your API base URL
  timeout: 10000, // Optional: set a timeout for requests
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the auth token
axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve the auth token from localStorage or another source
    const token = localStorage.getItem("authToken");

    if (token) {
      // Add the token to the request headers
      config.headers["Authorization"] = `${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle responses and errors
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response;
  },
  (error) => {
    // Handle response errors
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access, e.g., redirect to login
      console.log("Unauthorized access - possibly redirect to login");
      // Optionally: clear token, redirect to login, etc.
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
