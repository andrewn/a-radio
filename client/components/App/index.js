import React from 'react';
import values from 'lodash/values';

import ServiceList from '../ServiceList';
import Volume from '../Volume';
import Power from '../Power';
import Stack from '../Stack';
import Tweet from '../Tweet';

import styles from './styles.css';

export default function ({state, dispatch}) {
  return <div className="app">
    <Stack>
      <Power onPower={ () => dispatch('power') } isOn={ state.power } />
      <Volume value={state.volume} onChange={ vol => dispatch('volume', vol)} />
    </Stack>
    <ServiceList
      services={values(state.services)}
      currentService={state.currentService}
      onServiceSelect={ id => dispatch('serviceSelect', id) }/>
    <h2>Magic buttons</h2>
    <Tweet
      state={state.magic.tweet}
      onTweetRequested={ (data) => dispatch('tweet.tweet', data) } />
  </div>;
}
