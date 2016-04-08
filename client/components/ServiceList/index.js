import React from 'react';

import styles from './styles.css';

const Service = ({title, logos, active=false, onClick}) => {
  const logo = active ? logos.active : logos.inactive;
  return <div className="service-list-service" onClick={onClick}>
    <img className="service-list-image" src={logo} title={title}/>
  </div>;
}

export default function ({services, currentService='', onServiceSelect}) {
  return <ul className="service-list">
    {services.map(s => <li key={s.id}><Service {...s} active={currentService === s.id} onClick={ onServiceSelect.bind(null, s.id) }/></li>)}
  </ul>;
}
