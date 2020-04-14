import {
  GET_PROFILE,
  GET_PROFILES,
  CREATE_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
  GET_REPOS
} from '../actions/types';


//problem nowis, trying to get dashboard, but you don't hvae profile
//nofilms or tickets to load
//so does this have to go back into film?
//if it does, you still have the original problems
const initialState = {
  profile: null,
  profiles: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
         const { type, payload } = action 
         //console.log(payload);
        switch (type) {
          case GET_PROFILE:
          // case UPDATE_PROFILE:
          return {
            ...state,
            profile: payload,
            loading: false 
          };
          case GET_PROFILES:
          return {
            ...state,
            profiles: payload,
            loading: false 
          };
          // case CREATE_PROFILE:
          // return {
          //   ...state,
          //   profile: payload,
          //   loading: false 
          // }; 
          case PROFILE_ERROR:
          return {
            ...state,
            error: payload,
            loading: false
          }; 
          case CLEAR_PROFILE:
          return {
            ...state,
            profile: null,
            loading: false 
          }; 
          default:
            return state
        }
    }