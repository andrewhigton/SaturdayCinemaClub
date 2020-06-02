// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

// const initialState = {};
// const middleware = [thunk];

// const store = createStore(
// 					rootReducer, 
// 					initialState, 
// 					composeWithDevTools(applyMiddleware(...middleware))
// 					); 

// export default store;


import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];

export const store = createStore(
					rootReducer, 
					initialState, 
					composeWithDevTools(applyMiddleware(...middleware))
					); 

export const persistor = persistStore(store) 

export default { store, persistor };