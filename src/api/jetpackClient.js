import axios from "axios";

const jetpackClient = axios.create({
  baseURL: import.meta.env.VITE_APP_URL_JECTPACK_API,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",

  }
});

export default jetpackClient;
