import React from 'react';

import styles from './styles.css';

const Service = ({title, logos, active=false, onClick}) => {
  return <div className={`service-list-service ${active ? 'is-active' : 'is-inactive'}`} onClick={onClick}>
    <img className="service-list-image service-list-image-active" src={logos.active} title={title}/>
    <img className="service-list-image service-list-image-inactive" src={logos.inactive} title={title}/>
  </div>;
}

export default function ({services, currentService='', onServiceSelect}) {
  return (
    <div className="service-list-wrapper">
      <h2 className="service-list-hd">Stations</h2>
      <ul className={ `service-list is-open` }>
        {
          services.map( s => {
            return (
              <li key={s.id}>
                <Service
                  {...s}
                  active={currentService === s.id}
                  onClick={ onServiceSelect.bind(null, s.id) } />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}
