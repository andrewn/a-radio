var WebSocket = require('faye-websocket');

module.exports = function(server, state, onMessage) {
  server.on('upgrade', function(request, socket, body) {
    if (WebSocket.isWebSocket(request)) {
      var ws = new WebSocket(request, socket, body);
      var updateHandler = emitStateChange.bind(null, ws);

      // send complete state on new connection
      ws.send(JSON.stringify({
        type: 'state',
        data: state.get()
      }));

      ws.on('message', function(evt) {
        onMessage(JSON.parse(evt.data));
      });

      ws.on('close', function(event) {
        console.log('close', event.code, event.reason);
        state.off('update', updateHandler);
        ws = null;
      });

      // send updates when state changes
      state.on('update', updateHandler);
    }
  });

}

function emitStateChange(ws, e) {
  var eventData = e.data;

  ws.send(JSON.stringify({
    type: 'update',
    data: eventData
  }));
// console.log('Current data:', eventData.currentData);
// console.log('Previous data:', eventData.previousData);
// console.log('Transaction details:', eventData.transaction);
// console.log('Affected paths', eventData.paths);
}
