import React, { useReducer } from 'react';
import { CLEAR_SUGGESTIONS, GET_SUGGESTIONS } from '../types';
import AutoSuggestionContext from './autoSuggestionContext';
import AutoSuggestionReducer from './autoSuggestionReducer';

const AlertState = (props) => {
  const initialState = {
    suggestions: [],
  };
  const [state, dispatch] = useReducer(AutoSuggestionReducer, initialState);

  // get Suggestions
  const getSuggestions = (str) => {
    const data = [
      'Papaya',
      'Peach',
      'Pomegranate',
      'However,',
      'inbound',
      'deals',
      'slowed',
      'down',
      'in',
      'September',
      'quarter',
      'to',
      'Paw Paw',
      'USD',
      '12.18',
      'billion',
      'across',
      '39',
      'deals',
      'compared',
      'to',
      'June',
      'quarter',
      'at',
      'Pineapple',
      'USD',
      '20.3',
      'billion',
      'across',
      '48',
      'Prickly Pear',
      'transactions,',
      'recording',
      'a',
      '41',
      'per',
      'cent',
      'quarter-on-quarter',
      'drop',
      'in',
      'value.While',
      'inbound',
      'Chinese',
      'investments',
      'at',
      'USD',
      '385',
      'million',
      'across',
      'three',
      'deals',
      'plunged',
      '63',
      'per',
      'cent',
      'in',
      'deal',
      'counts',
      'compared',
      'to',
      'the',
      'same',
      'period',
      'in',
      '2019',
      'when',
      'it',
      'stood',
      'USD',
      '1.8',
      'billion',
      'across',
      'eight',
      'deals',
      'in',
      'the',
      'first',
      'nine',
      'months',
      'of',
      '2020,',
      'inflows',
      'from',
      'the',
      'US',
      'soared',
      '300',
      'percent1',
      'From',
      'a',
      'deal',
      'count',
      'perspective,',
      'the',
      'number',
      'of',
      'transactions',
      'came',
      'down',
      'to',
      '686',
      'in',
      'January-September',
      '2020',
      'as',
      'against',
    ];

    const suggestions = data.filter(
      (value) => value.toLowerCase().indexOf(str.toLowerCase()) > -1
    );
    dispatch({ type: GET_SUGGESTIONS, payload: suggestions.splice(0, 7) });
  };

  const clearSuggestion = () => dispatch({ type: CLEAR_SUGGESTIONS });

  return (
    <AutoSuggestionContext.Provider
      value={{
        suggestions: state.suggestions,
        getSuggestions,
        clearSuggestion,
      }}
    >
      {props.children}
    </AutoSuggestionContext.Provider>
  );
};

export default AlertState;
