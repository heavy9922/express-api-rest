const express = require('express');
const morgan = require('morgan');
const routerApi = require('./routes');

const { logErrors, errorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 4000;

app.use(morgan('dev'));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola my server Express');
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => console.log(`mi port ${port}`));
