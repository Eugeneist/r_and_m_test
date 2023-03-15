import {
  ADD_TO_CHARS,
  ADD_FILTERED_CHARS,
  ADD_TO_CHARS_FAILTURE,
  CLEAR_FILTERED_CHARS,
} from '../actionTypes/charsTypes';
import { AxiosResponse } from 'axios';

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
