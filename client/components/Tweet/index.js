import React from 'react';

import Stack from '../Stack';

import styles from './styles.css';

const Connect = function ({ authUrl, onClick }) {
  let content;
  if (authUrl) {
    content = <p><a href={authUrl}>Go to Twitter to authorize</a></p>;
  } else {
    content = <button onClick={ onClick }>Connect</button>;
  }
  return (
    <div>
      { content }
    </div>
  );
}

const MainUi = function ({ user, onClick }) {
  return (
    <div>
      <h2>Tweet</h2>
      <Stack group="together">
        <button
          className={`tweet-button`}
          data-mood="positive"
          onClick={ () => onClick({ mood: 'positive' }) }>+</button>
        <button
          className={`tweet-button`}
          data-mood="neutral"
          onClick={ () => onClick({ mood: 'neutral' }) }>+/-</button>
        <button
          className={`tweet-button`}
          data-mood="negative"
          onClick={ () => onClick({ mood: 'negative' }) }>-</button>
      </Stack>
      <p className="tweet-label">Tweeting as <span className="tweet-screen-name">{ user.screenName }</span></p>
    </div>
  );
};

export default function ({state, isOn, onConnectRequested, onTweetRequested }) {
  const connect = <Connect
                    authUrl={ state.authUrl }
                    onClick={ onConnectRequested } />;

  const mainUi = <MainUi user={ state } onClick={ onTweetRequested } />;
  let content;

    if (isOn === true) {
      content = state.oAuthAccessToken ? mainUi : connect
    }

  return (
    <div>
      { content }
    </div>
  );
}
