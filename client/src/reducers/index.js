import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import film from './film';
// import post from './post';

export default combineReducers({
	alert,
	auth,
	film,
	profile
});