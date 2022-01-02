const express = require('express');
const morgan = require('morgan');
const routerApi = require('./routes');
const app = express();
const port = 4000;

app.use(morgan('dev'));

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hola my server Express');
});

routerApi(app);

app.listen(port, () => console.log(`mi port ${port}`));
