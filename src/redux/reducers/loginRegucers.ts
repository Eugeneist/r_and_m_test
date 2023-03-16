import { LOGIN_SUCCESS, LOGOUT } from '../actionTypes/charsTypes';

const initialState = { isLoggedIn: false, user: null };

const loginReducers = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(payload));

      return {
        ...state,
        isLoggedIn: true,
        user: payload,
      };
    case LOGOUT:
      localStorage.removeItem('user');
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default loginReducers;
