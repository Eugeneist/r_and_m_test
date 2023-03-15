import {
  ADD_TO_CHARS,
  ADD_FILTERED_CHARS,
  ADD_TO_CHARS_FAILTURE,
  CLEAR_FILTERED_CHARS,
} from '../actionTypes/charsTypes';
import { iAxiosResponse } from '../../interfaces/interfaces';

const charsList: iAxiosResponse = {
  info: {},
  results: [],
  filtered: [],
};

const charsReducers = (state = charsList, action: any) => {
  switch (action.type) {
    case ADD_TO_CHARS: {
      const data = action.payload;

      state = data;

      return { ...state };
    }
    case ADD_FILTERED_CHARS: {
      const data = action.payload;

      const filtered = state.results.filter((character) =>
        character.name.toLowerCase().includes(data.toLowerCase()),
      );

      state.filtered = filtered;
      localStorage.setItem('searchFiltered', JSON.stringify(filtered));

      return { ...state };
    }
    case CLEAR_FILTERED_CHARS:
      return {
        ...state,
        filtered: [],
      };
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
