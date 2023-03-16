import {
  ADD_TO_CHARS,
  ADD_FILTERED_CHARS,
  ADD_TO_CHARS_FAILTURE,
  CLEAR_FILTERED_CHARS,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actionTypes/charsTypes';
import { AxiosResponse } from 'axios';
import { iLogin } from '../../interfaces/interfaces';

export const addToChars = (data: AxiosResponse) => {
  return {
    type: ADD_TO_CHARS,
    payload: data,
  };
};

export const addFilteredChars = (string: string) => {
  return {
    type: ADD_FILTERED_CHARS,
    payload: string,
  };
};

export const clearFilteredChars = () => ({
  type: CLEAR_FILTERED_CHARS,
});

export const addToCharsError = (error: AxiosResponse) => {
  return {
    type: ADD_TO_CHARS_FAILTURE,
    payload: error,
  };
};

export const login = (data: unknown) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const logout = () => ({
  type: LOGOUT,
});
