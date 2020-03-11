import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_FILM,
  // GET_FILMS,
  FILM_ERROR
} from './types';
//import setAuthToken from '../utils/setAuthToken';

// Get all Films
export const loadFilms = () => async dispatch => {
  
  try {
    const res = await axios.get('/api/profile');

    dispatch({
      type: GET_FILM,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: FILM_ERROR,
      //payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};



// // Register User
// export const register = ({ name, email, password }) => async dispatch => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

//   const body = JSON.stringify({ name, email, password });

//   try {
//     const res = await axios.post('/api/users', body, config);
//     dispatch({
//       type: REGISTER_SUCCESS,
//       payload: res.data
//     });
//     dispatch(loadUser());
  
//   } catch (err) {
//     const errors = err.response.data.errors;

//     if (errors) {
//       errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//     }

//     dispatch({
//       type: REGISTER_FAIL
//     });
//   }
// };

// //Login User
// export const login = (email, password) => async dispatch => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

//   const body = JSON.stringify({ email, password });

//   try {
//     const res = await axios.post('/api/auth', body, config);

//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: res.data
//     });
  
//     dispatch(loadUser());
//   } catch (err) {
//     const errors = err.response.data.errors;

//     if (errors) {
//       errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//     }

//     dispatch({
//       type: LOGIN_FAIL
//     });
//   }
// };

// //Logout / Clear Profile
// export const logout = () => dispatch => {
//   // dispatch({ type: CLEAR_PROFILE });
//   dispatch({ type: LOGOUT });
// };