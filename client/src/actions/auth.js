import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  UPDATE_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_ERROR
} from './types';

import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  
  try {
    const res = await axios.get('/api/auth');
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    console.log(err)
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('/api/users', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
    } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      console.log(err)
      alert(err)
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

//Login User
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });
  
  try {
    const res = await axios.post('/api/auth', body, config);
    
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
     dispatch(loadUser());
    
  } 
  catch (err) {
    
    const errors = err.response.data.errors;
    if (errors) {
      alert(errors)
      dispatch({
      type: LOGIN_FAIL
    });
    }
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

    const res = await axios.post('/api/users/ticket', formData, config);
    dispatch({
      type: UPDATE_USER,
      payload: res.data
    });
    //history.push('/film/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      alert(errors)
      console.log(errors)
    }
  }
};

export const deleteTickets = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/tickets/${id}`);

    dispatch({
      type: UPDATE_USER,
      payload: res.data
    });
  } catch (err) {
    alert(err.response.statusText)
    console.log(err.response.statusText)
    
  }
};

//Logout
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};