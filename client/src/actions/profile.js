import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  FILM_ERROR,
  GET_FILM,
  ACCOUNT_DELETED,
} from './types';

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
  try {
    //in dev, this is profile/me
    const res = await axios.get('/api/profile/me');
    // console.log(res.data)
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const createProfile = ( name, email, history ) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.post('/api/profile', name, email, config);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
    dispatch(setAlert('Profile Created', 'success'));
      history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const loadProfiles = () => async dispatch => {
  
  try {
    const res = await axios.get('/api/profile');

    dispatch({
      type: GET_PROFILES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      //payload: { msg: err.response.statusText, status: err.response.status }
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
    //note - when it comes to finalisng this, get ride of profile, put it in film path
    const res = await axios.post('/api/profile/create-film', formData, config);    
    dispatch({
      type: GET_FILM,
      payload: res.data
    });

    // dispatch(setAlert(edit ? 'Film updated' : 'Film created', 'success'));

    // if(!edit) {
    //   history.push('/dashboard');
    // }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Tickets
export const updateUserTickets = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.put('/api/profile/ticket', formData, config);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Tickets Added', 'success'));

    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete experience
export const deleteTickets = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/profile/tickets/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Tickets Removed', 'success'));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};



// Delete account & profile
export const deleteAccount = () => async dispatch => {
  if (window.confirm('Please Note: Your films will still go ahead and tickets cannot be cancelled unless the film fails to reach it\'s target!')) {
    try {
      await axios.delete('/api/profile');

      dispatch({ type: CLEAR_PROFILE });
      dispatch({ type: ACCOUNT_DELETED });

      dispatch(setAlert('Your account has been permanantly deleted'));
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};