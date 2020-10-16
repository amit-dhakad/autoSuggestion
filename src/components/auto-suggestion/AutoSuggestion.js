import React, { Fragment, useContext, useState } from 'react';
import AutoSuggestionContext from '../../context/auto-suggestion/autoSuggestionContext';
const AutoSuggestion = () => {
  const [text, setText] = useState('');

  const autoSuggestionContext = useContext(AutoSuggestionContext);
  const {
    getSuggestions,
    suggestions,
    clearSuggestion,
  } = autoSuggestionContext;
  let suggestionList;

  const onChange = (e) => {
    setText(e.target.value);
    getSuggestions(text);
  };

  const onClick = (e) => {
    setText(e.currentTarget.innerText);
    clearSuggestion();
  };

  if (suggestions.length > 1 && text) {
    if (suggestions.length) {
      suggestionList = (
        <ul className="options">
          {suggestions.map((value, index) => {
            let className;
            if (value === text) {
              className = 'option-active';
            }
            return (
              <li className={className} key={value} onClick={onClick}>
                {value}
              </li>
            );
          })}
        </ul>
      );
    }
  }

  return (
    <Fragment>
      <div className="search">
        <input
          type="text"
          className="search-box"
          onChange={onChange}
          value={text}
        />
        <input type="submit" value="" className="search-btn" />
      </div>
      {suggestionList}
    </Fragment>
  );
};

export default AutoSuggestion;
