import { ADD_TO_CHARS, ADD_TO_CHARS_FAILTURE } from '../actionTypes/charsTypes';
import { AxiosResponse } from 'axios';

export const addToChars = (data: AxiosResponse) => {
  return {
    type: ADD_TO_CHARS,
    payload: data,
  };
};

export const addToPostsResponse = (error: AxiosResponse) => {
  return {
    type: ADD_TO_CHARS_FAILTURE,
    payload: error,
  };
};
