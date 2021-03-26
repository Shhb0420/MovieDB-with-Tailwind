import axios from "axios";
import { API_URL, API_KEY } from "./environment";

export const getGenres = (data) => {
  return axios.get(
    `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US
    `,
    data
  );
};

export const getTrending = (data) => {
  return axios.get(`${API_URL}/trending/movie/day?api_key=${API_KEY}`, data);
};
