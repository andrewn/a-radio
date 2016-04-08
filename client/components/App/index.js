import React from 'react';
import values from 'lodash/values';

import ServiceList from '../ServiceList';
import Volume from '../Volume';

export default function ({state, dispatch}) {
  return <div className="app">
    <Volume value={state.volume} onChange={ vol => dispatch('volume', vol)} />
    <ServiceList
    services={values(state.services)}
    currentService={state.currentService}
    onServiceSelect={ id => dispatch('serviceSelect', id) }/>
  </div>;
}
