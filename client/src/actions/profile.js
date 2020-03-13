import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_PROFILE,
  // GET_PROFILES,
  PROFILE_ERROR,
  UPDATE_FILM,
  CLEAR_PROFILE,
  // ACCOUNT_DELETED,
  // GET_REPOS
} from './types';

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
  try {
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
      type: GET_PROFILE,
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

//Get profile by ID
export const getFilmById = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/profile/user/${userId}`);

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


// update film
export const updateFilm = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.put('/api/profile/booking', formData, config);

    dispatch({
      type: UPDATE_FILM,
      payload: res.data
    });

    dispatch(setAlert('Thanks for your booking', 'success'));

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


// // Get all profiles
// export const getProfiles = () => async dispatch => {
//   dispatch({ type: CLEAR_PROFILE });

//   try {
//     const res = await axios.get('/api/profile');

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



// // Delete account & profile
// export const deleteAccount = () => async dispatch => {
//   if (window.confirm('Are you sure? This can NOT be undone!')) {
//     try {
//       await axios.delete('/api/profile');

//       dispatch({ type: CLEAR_PROFILE });
//       dispatch({ type: ACCOUNT_DELETED });

//       dispatch(setAlert('Your account has been permanantly deleted'));
//     } catch (err) {
//       dispatch({
//         type: PROFILE_ERROR,
//         payload: { msg: err.response.statusText, status: err.response.status }
//       });
//     }
//   }
// };