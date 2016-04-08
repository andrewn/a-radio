import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App';

export function render(state, dispatch) {
  ReactDOM.render(<App state={state} dispatch={dispatch} />, document.getElementById('container'));
}
