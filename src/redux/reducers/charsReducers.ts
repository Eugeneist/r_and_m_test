import { ADD_TO_CHARS, ADD_TO_CHARS_FAILTURE } from '../actionTypes/charsTypes';
import { iAxiosResponse } from '../../interfaces/interfaces';

const charsList: iAxiosResponse = {
  info: {},
  results: [],
};

const charsReducers = (state = charsList, action: any) => {
  switch (action.type) {
    case ADD_TO_CHARS: {
      const data = action.payload;

      return { ...data };
    }
    case ADD_TO_CHARS_FAILTURE: {
      const error = action.payload;

      return { ...error };
    }
    default: {
      return state;
    }
  }
};

export default charsReducers;
