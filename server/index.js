const express = require('express');
const bodyParser = require('body-parser')
const mc = require('./controllers/messages_controllers')

app = express(); 

app.use(bodyParser.json());
app.use(express.static( __dirname + '/../public/build' ));

app.get( '/api/messages', mc.read );

app.post( '/api/messages', mc.create );

app.put( '/api/messages', mc.update );

app.delete( '/api/message', mc.delete);

app.listen(3001, () => {
    console.log('Server up on port 3001');
    
})