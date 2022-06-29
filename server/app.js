const express = require('express');
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json()); 


app.get('/', (req, res) => res.status(200).send('Hello World!'))

app.get('/users', (req, res) => {
  knex 
    .select('*')
    .from('users')
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send('Could not retrieve data'))
})

app.get('/users/:name', (req, res) => {
  knex 
    .select('*')
    .from('users')
    .where('first_name', req.params.name)
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send('Could not retrieve data'))
})

app.get('/posts', (req, res) => {
  knex 
    .select('*')
    .from('posts')
    .then(data => res.status(200).json(data))
    .catch(() => res.status(404).send('Could not retrieve data'))
})
module.exports = app;