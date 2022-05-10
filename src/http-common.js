import axios from "axios";
export default axios.create({
  baseURL: "https://fullstack-back-app.herokuapp.com/items",
  headers: {
    "Content-type": "application/json"
  }
});
