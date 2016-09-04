import React from 'react'

import styles from './styles.css';

export default function ({ children }) {
  return <div className="stack-layout">
    { children }
  </div>;
}
