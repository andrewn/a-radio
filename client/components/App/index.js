import React from 'react';
import values from 'lodash/values';

import ServiceList from '../ServiceList';
import Volume from '../Volume';
import Power from '../Power';
import Stack from '../Stack';
import Tweet from '../Tweet';

import styles from './styles.css';

export default function ({state, dispatch}) {
  const magic = state.config.magic && state.config.magic.tweet
    ? <Tweet
        isOn={ state.power }
        state={state.magic.tweet}
        onTweetRequested={ (data) => dispatch('tweet.tweet', data) } />
    : null;

  return <div className={ `app ${ state.power ? 'is-on' : 'is-off' }`}>
    <div className="on-state">
      <Stack>
        <Power onPower={ () => dispatch('power') } isOn={ state.power } />
        <Volume value={state.volume} onChange={ vol => dispatch('volume', vol)} />
      </Stack>
      <ServiceList
        services={values(state.services)}
        currentService={state.currentService}
        onServiceSelect={ id => dispatch('serviceSelect', id) }/>
      { magic }
    </div>
    <div className="off-state">
      <Power onPower={ () => dispatch('power') } isOn={ state.power } />
    </div>
  </div>;
}
