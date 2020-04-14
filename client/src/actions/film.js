import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_FILM,
  UPDATE_FILM,
  GET_FILMS,
  CLEAR_FILM,
  FILM_ERROR,
} from './types';
//import setAuthToken from '../utils/setAuthToken';

// Get all Films
export const loadFilms = () => async dispatch => {
  //dispatch({ type: CLEAR_FILM });
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

  // Get all Films
// export const getCurrentFilm = title => async dispatch => {
//   //dispatch({ type: CLEAR_FILM });
//   try {
//     const res = await axios.get(`/api/film/current/${title}`);

//     dispatch({
//       type: GET_FILM,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: FILM_ERROR,
//       //payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
//   };
  
//Get profile by ID
export const getFilmById = film_id => async dispatch => {
  dispatch({ type: CLEAR_FILM });
  try {
    //this is the next problem. it's not returning anything. why?
    const res = await axios.get(`/api/film/${film_id}`)
    // .populate('film', ['title', 'cinema']);
    // console.log(res)
    dispatch({
      type: GET_FILM,
      // payload: { msg: res.data }
      payload: res.data
    });
  } catch (err) {
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

    // const res = await axios.put('/api/profile/booking', formData, config);
    const res = await axios.put('/api/film/booking', formData, config);
    //console.log(res);
    dispatch({
      type: UPDATE_FILM,
      payload: res.data
      });
    //history.push(dispatch(getFilmById(`/api/film/booking/${film_id}`)))
    dispatch(setAlert('Thanks for your booking', 'success'));
    //still doesn't work, first time
    //history.push(getFilmById(`/api/film/booking/${film_id}`));
    //if you canget this to work after payment is succesful?? ideal
    history.push('/');
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

// export const getFilms = () => async dispatch => {
//   dispatch({ type: CLEAR_FILM });

//   try {
//     const res = await axios.get('/api/film');

//     dispatch({
//       type: GET_PROFILES,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: PROFILE_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };





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