import axios from "axios";

const APIClient = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/discover/movie?api_key=0b15dd3d54bf72edddc232b20326bb9f",
});

export default APIClient;
