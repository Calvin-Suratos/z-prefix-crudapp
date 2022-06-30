const express = require('express');
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const { restart } = require('nodemon');
const saltRounds = 10;

app.use(cors());
app.use(express.json()); 


app.get('/', (req, res) => res.status(200).send('Hello World!'))

app.get('/users', (req, res) => {
  knex
    .select('*')
    .from('users')
    .then(data => res.status(200).json(data))
    .catch(err => console.error(err))
})

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const salt = await knex
  .select('salt')
  .from('users')
  .where({username: username})

  const hash = bcrypt.hashSync(password, salt[0].salt);


  let result = await knex 
    .select('password')
    .from('users')
    .where({username: username})

  const bool = bcrypt.compare(result[0].password, hash)

  let name = await knex
    .select('first_name', 'last_name')
    .from('users')
    .where({username: username})
    
  if (bool) {
    res.status(200).json(name[0])
  }
  else {
    res.status(404).send('Could not retrieve data')
  }
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

app.post('/createaccount', async (req, res) => {
  const { first_name, last_name, username, password } = req.body;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);

  try {await knex('users')
    .insert({
      first_name: first_name,
      last_name: last_name,
      username: username,
      password: hash,
      salt: salt
    })

    let name = await knex
    .select('first_name', 'last_name')
    .from('users')
    .where({username: username})

  res.status(201).json(name[0])}

  catch (err) {
    res.status(500).send()
    console.error(err)
  }
});

app.post('/login')

module.exports = app;