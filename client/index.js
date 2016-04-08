import Baobab from 'baobab';

import { connect } from './lib/connection';
import { render } from './lib/ui';

const state = new Baobab();

state.on('update', () => render(state.get()));

const handleMessage = msg => {
  console.log('handleMessage', msg);
  switch (msg.type) {
    case 'state':
      return state.set(msg.data);
    case 'update':
      return console.log('State update', msg.data);
    default:
      return console.warn('No handler for msg type: ', msg.type, msg.data);
  }
}

const connection = connect(handleMessage);

if (module.hot) {
  module.hot.accept();
}
