import axios from "axios";

export const API = axios.create({
  baseURL: "localhost:8000",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});
