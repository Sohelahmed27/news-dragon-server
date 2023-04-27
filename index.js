const express = require('express');
const cors = require('cors');
const app = express();
const port =  5000;

const catagories = require('./Data/catagories.json')

app.use(cors());

app.get('/', (req, res) => {
  res.send('Dragon is running')
})

app.get('/catagories', (req, res) => {
  res.send(catagories)
})

app.listen(port, ()=>{
  console.log(`Dragon API is running on port ${port}`)
})