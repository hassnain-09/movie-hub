import axios from "axios";

const APIClient = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default APIClient;
