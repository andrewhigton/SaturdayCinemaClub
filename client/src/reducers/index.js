import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import alert from './alert';
import auth from './auth';
import film from './film';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth', 'film', 'profile']

}

const rootReducer = combineReducers({
	alert,
	auth,
	film,
});

export default persistReducer(persistConfig, rootReducer);

// export default combineReducers({
// 	alert,
// 	auth,
// 	film,
// 	profile
// });