import {
  GET_FILM,
  // GET FILMS,
  FILM_ERROR
} from '../actions/types';

const initialState = {
  film: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
         const { type, payload } = action 
        switch (type) {
          case GET_FILM:
          return {
            ...state,
            film: payload,
            loading: false
            // error: {} 
          }; 
          case FILM_ERROR:
          return {
            ...state,
            error: payload,
            loading: false
          }; 
          default:
            return state
        }
    }