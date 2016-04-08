import { connect } from './lib/connection';

const connection = connect(msg => console.log('Message', msg));

if (module.hot) {
  module.hot.accept();
}
