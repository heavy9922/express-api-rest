const express = require('express')
const app = express()
const morgan  = require('morgan');
const port = 4000

app.use(morgan('dev'))
app.get('/',(req,res)=>{
  res.send('Hola my server Express')
})

app.get('/newRoute',(req,res)=>{
  res.send('Hola i am a new route')
})

app.get('/newJson',(req,res)=>{
  res.json({
    name:"product 1",
    price: 500
  })
})

app.listen(port,()=>console.log(`mi port ${port}`))
