import axios from "axios";

export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://psyhology-site.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
    'X-Requested-With': 'XMLHttpRequest'
  }
});
