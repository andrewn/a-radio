import React from 'react'

import styles from './styles.css';

export default function ({ children, group="space-between" }) {
  const groupingClass = (group === "together") ? "stack-group-together" : "";
  return <div className={ `stack-layout ${ groupingClass }` }>
    { children }
  </div>;
}
