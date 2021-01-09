import { FETCH_MOVIE_LIST , FETCH_MOVIE_DETAIL } from "../constants/movieConstant"

const initialState = {
    movieList: null,
    movieDetail: null,
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIE_LIST:
            state.movieList = action.payload;
            return { ...state };
        case FETCH_MOVIE_DETAIL:
          state.movieDetail = action.payload;
          return { ...state };
        default:
            return state;
    }
};

export default movieReducer;