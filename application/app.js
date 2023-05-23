const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json())
app.use(cors());
app.use(require('./router/server'))
app.listen('8080', () => console.log('puerto iniciado 3000'))