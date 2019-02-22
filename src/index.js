// some stuff for example...

const Channel = require('@fappurbate/channel-bot');

const channel = new Channel({ name: 'my new awesome bot' });

cb.onMessage(msg => {
  if (msg.m.toLowerCase().indexOf('hello') !== -1) {
    channel.emit('potential greeting', { from: msg.user, message: msg.m });
  }
});
