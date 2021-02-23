import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_FILM,
  UPDATE_FILM,
  GET_FILMS,
  CLEAR_FILM,
  FILM_ERROR,
  DELETE_FILM
} from './types';

// Get all Films
export const loadFilms = () => async dispatch => {
  try {
    const res = await axios.get('/api/film');

    dispatch({
      type: GET_FILMS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: FILM_ERROR,
      //payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
  };

//Get film by ID
export const getFilmById = film_id => async dispatch => {
  dispatch({ type: CLEAR_FILM });
  try {
    const res = await axios.get(`/api/film/${film_id}`)
    // .populate('film', ['title', 'cinema']);
    
    dispatch({
      type: GET_FILM,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: FILM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// create film
export const createFilm = ( formData, history ) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    const res = await axios.post('/api/film/create-film', formData, config);    
    dispatch({
      type: GET_FILM,
      payload: res.data
    });
    history.push('/film/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: FILM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const updateFilm = (formData, history) => async dispatch => {
  dispatch({ type: CLEAR_FILM });
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.put('/api/film/booking', formData, config);
    dispatch({
      type: UPDATE_FILM,
      payload: res.data
      });
    dispatch(setAlert('Thanks for your booking', 'success'));
    //history.push(getFilmById(`/api/film/booking/${film_id}`));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: FILM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const deleteFilm = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/profile/tickets/${id}`);

    dispatch({
      type: DELETE_FILM,
      payload: res.data
    });

    dispatch(setAlert('Tickets Removed', 'success'));
  } catch (err) {
    dispatch({
      type: FILM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};