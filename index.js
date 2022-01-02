const express = require('express')
const faker = require('faker')

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

app.get('/products',(req,res)=>{
  const {size} = req.query
  const limit = size || 5;
  const products = []
  for (let i = 0; i < limit ;i++){
    products.push({
      id: i+1,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      imagen: faker.image.imageUrl()
    })
  }
  res.json(products)
})

app.get('/products/:id',(req,res)=>{
  const {id} = req.params
  res.json(
    {
      id,
      name:"product 1",
      price: 500
    }
  )
})

app.get('/users',(req,res)=>{
  const {limit,offset} = req.query
  if(limit && offset){
    res.json({
      limit,
      offset
    })
  }else{
    res.json({
      note:"no hay parametros"
    })
  }
})

app.get('/categories/:cId/products/:pId',(req,res)=>{
  const {cId,pId} = req.params
  res.json(
    {
      cId,
      pId,
      name:"categories 1",
      price: 500
    }
  )
})


app.listen(port,()=>console.log(`mi port ${port}`))
