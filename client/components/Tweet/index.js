import React from 'react';

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
      Tweeting as { user.screenName }!
      <button onClick={ () => onClick({ mood: 'positive' }) }>+</button>
      <button onClick={ () => onClick({ mood: 'neutral' }) }>+/-</button>
      <button onClick={ () => onClick({ mood: 'negative' }) }>-</button>
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
