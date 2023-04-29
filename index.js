const express = require('express');
const cors = require('cors');
const app = express();
const port =  5000;

const catagories = require('./Data/catagories.json');
const news = require('./Data/news.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Dragon is running')
})

app.get('/catagories', (req, res) => {
  res.send(catagories)
})

app.get('/news', (req, res) => {
  res.send(news)
})
app.get('/news/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  const selectedNews = news.find(news => news._id === id);
  res.send(selectedNews);
})

app.get('/categories/:id', (req, res) => {
   const id = parseInt(req.params.id);
   console.log(id);
   if(id === 0){
      res.send(news)
   }
   else{
    const categoryNews = news.filter(news =>parseInt(news.category_id) === id)
    res.send(categoryNews);
   }  
})

app.listen(port, ()=>{
  console.log(`Dragon API is running on port ${port}`)
})