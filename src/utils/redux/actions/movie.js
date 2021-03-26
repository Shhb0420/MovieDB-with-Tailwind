import * as actions from "./actionType";
import * as api from "../../reqData";

export const getGenres = (data) => {
  return {
    type: actions.GET_GENRES,
    payload: api.getGenres(data),
  };
};

export const getTrending = (data) => {
  return {
    type: actions.FETCH_ALL_MOVIE_TRENDING,
    payload: api.getTrending(data),
  };
};
