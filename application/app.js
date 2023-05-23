const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json())
app.use(cors());
app.use(require('./router/server'))
app.set('port',8090)
app.listen(app.get('port'), () => console.log('servidor en el puerto :',app.get('port')))