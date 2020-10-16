import { CLEAR_SUGGESTIONS, GET_SUGGESTIONS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_SUGGESTIONS:
      return { ...state, suggestions: action.payload };

    case CLEAR_SUGGESTIONS:
      return { ...state, suggestions: [] };

    default:
      return state;
  }
};
