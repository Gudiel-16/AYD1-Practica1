const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({ extended: true }))
require('./database');

app.use(require('./routes/index.routes'));

app.listen(3000);
console.log('Server on port', 3000);