import * as actions from "../actions/actionType";

const initialState = {
  msg: "",
  status: "",
  genres: [],
  trending: [],
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_GENRES + actions.PENDING:
      return {
        ...state,
        isPending: true,
      };
    case actions.GET_GENRES + actions.REJECTED:
      return {
        ...state,
        isPending: false,
        isRejected: true,
        isFulfilled: false,
      };
    case actions.GET_GENRES + actions.FULFILLED:
      if (payload.status === 200) {
        return {
          ...state,
          isPending: false,
          isFulfilled: true,
          genres: payload.data.genres,
          // status: payload.data.data.msg,
        };
      } else {
        return {
          ...state,
          isPending: false,
          isRejected: true,
          isFulfilled: true,
          // status: payload.data.data.msg,
        };
      }

    case actions.FETCH_ALL_MOVIE_TRENDING + actions.PENDING:
      return {
        ...state,
        isPending: true,
      };
    case actions.FETCH_ALL_MOVIE_TRENDING + actions.REJECTED:
      return {
        ...state,
        isPending: false,
        isRejected: true,
        isFulfilled: false,
      };
    case actions.FETCH_ALL_MOVIE_TRENDING + actions.FULFILLED:
      if (payload.status === 200) {
        return {
          ...state,
          isPending: false,
          isFulfilled: true,
          trending: payload.data.results,
          // status: payload.data.data.msg,
        };
      } else {
        return {
          ...state,
          isPending: false,
          isRejected: true,
          isFulfilled: true,
          // status: payload.data.data.msg,
        };
      }
    default:
      return state;
  }
};

export default movieReducer;