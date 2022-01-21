const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler,boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(morgan('dev'));

app.use(express.json());
// const whiteList = ['http://127.0.0.1:5500']
// const options = {
//   origin:(origin,callback)=>{
//     if(whiteList.includes(origin)){
//       callback(null,true)
//     }else{
//       callback(new Error('Not allowed'))
//     }
//   }
// }
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola my server Express');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => console.log(`mi port ${port}`));
