import React from 'react';
import './App.css';
import AutoSuggestion from './components/auto-suggestion/AutoSuggestion';
import AutoSuggestionState from './context/auto-suggestion/AutoSuggestionState';
function App() {
  return (
    <AutoSuggestionState>
      <AutoSuggestion />
    </AutoSuggestionState>
  );
}

export default App;
