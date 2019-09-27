import app from './app';
import * as mongoose from 'mongoose';
const PORT = 3000;

// *note*
// app is an instance of EventEmitter
// so we can easily subscribe to events
// aka: listen for the 'ready' event
//
app.on('ready', () => {
  app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
  });
});

mongoose.connect('mongodb://localhost/test');
mongoose.connection.once('open', () => {
  // All OK - fire (emit) a ready event.
  app.emit('ready');
});
