import React from 'react';
import times from 'lodash/times';

import styles from './styles.css';

const Step = ({ active=false }) => <div className={ `step ${ active === true ? 'is-active' : 'is-inactive' }` }></div>;

export default function({ min=0, max=100, step=5, value=0, onChange }) {
  const numItems = (max - min) / step;
  return (
    <ul className="stepped-range">
      { times(
        numItems,
        index => {
          const stepValue = index * step;
          const eventObject = { target: { value: stepValue.toString() } };
          return <li
                    key={index}
                    onClick={ () => onChange(eventObject) }
                    className="stepped-range--step-wrapper">
                  <Step active={ stepValue <= value } />
                 </li>
          }
        )
      }
    </ul>
  );
}
