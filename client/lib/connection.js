import ReconnectingWebSocket from 'ReconnectingWebSocket';

const handleMessage = callback => evt => {
  const data = evt.data;
  if (!data) {
    return;
  }
  try {
    callback(JSON.parse(data));
  } catch (e) {
    console.error('Parse error', e);
  }
}

export function connect(onMessage) {
  const ws = new ReconnectingWebSocket(window.location.origin.replace(window.location.protocol, 'ws://'));
  const handler = handleMessage(onMessage);
  ws.addEventListener('message', handler);

  return {
    destroy: function() {
      ws.removeEventListener('message', handler);
      ws.close();
    },
    send: function(type, data) {
      ws.send(JSON.stringify({
        type,
        data
      }));
    }
  }
}
