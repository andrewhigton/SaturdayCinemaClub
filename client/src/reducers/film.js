import {
  GET_FILM,
  UPDATE_FILM,
  GET_FILMS,
  FILM_ERROR,
  CLEAR_FILM,
  DELETE_FILM
} from '../actions/types';

const initialState = {
  film: null,
  films: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
         const { type, payload } = action 
        switch (type) {
          case GET_FILM:
          // case UPDATE_FILM:
          return {
            ...state,
            film: payload,
            loading: false 
          };
          case GET_FILMS:
          return {
            ...state,
            films: payload,
            loading: false 
          };
          case UPDATE_FILM:
          return {
            ...state,
            film: payload,
            loading: false 
          }; 
          case FILM_ERROR:
          return {
            ...state,
            error: payload,
            loading: false
          }; 
          //this needed?
          case CLEAR_FILM:
          return {
            ...state,
            film: null,
            films: [],
            loading: false
          };
          default:
            return state
        }
    }