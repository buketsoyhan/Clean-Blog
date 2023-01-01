const express = require('express');
const path=require('path')
const app = express();

const ejs = require('ejs')

app.set("view engine", "ejs")
app.use(express.static('public'));

const port = 3001;

const blog = { id: 1, title: 'Blog title', description: 'Blog description' };

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
