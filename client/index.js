import Baobab from 'baobab';

import { connect } from './lib/connection';
import { render } from './lib/ui';

const state = new Baobab();

const handleMessage = msg => {
  console.log('handleMessage', msg);
  switch (msg.type) {
    case 'state':
      return state.set(msg.data);
    case 'update':
      return state.select(msg.data.transaction[0].path).set(msg.data.transaction[0].value);
    default:
      return console.warn('No handler for msg type: ', msg.type, msg.data);
  }
}

const connection = connect(handleMessage);

const handleDispatch = (type, data) => {
  console.log('DISPATCH', type, data);
  connection.send(type, data);
}

state.on('update', () => render(state.get(), handleDispatch));

if (module.hot) {
  module.hot.accept();
}
