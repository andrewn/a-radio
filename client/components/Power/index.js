import React from 'react';

import styles from './styles.css';

export default function ({onPower, isOn=false}) {
  return <button className={ `power ${ isOn === true ? 'is-on' : 'is-off' }` } onClick={onPower}>Power</button>
}
