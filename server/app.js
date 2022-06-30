const express = require('express');
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const { restart } = require('nodemon');
// const saltRounds = 10;

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
  // console.log(req.body);
  const { username, password } = req.body;
  const salt = await knex
  .select('salt')
  .from('users')
  .where({username: username})

  console.log(salt)
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
    
  console.log(name[0])
  if (bool) {
    res.status(200).json(name[0])
  }
  else {
    res.status(404).send('Could not retrieve data')
  }
    // .then(data => res.status(200).json(data))
    // .catch(() => res.status(404).send('Could not retrieve data'))
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
  const { username, password } = req.body;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  console.log(username, hash)

  await knex('users')
    .insert({
      id: req.body.id,
    })
  let result = await knex('users')
  .select('*')

  res.status(201).send(result.username)
  // bcrypt password
  // save to database (username, password)

  // const resp = await fetch('/register');
});

app.post('/login')

module.exports = app;

// const init = {
//   method: 'PATCH',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8'
//   },
//   body: JSON.stringify(
//     {
//       "title": movie.title,
//       "watched": !movie.watched,
//     } 
//   )
// }

// fetch(`https://calvin-movie-list-api.herokuapp.com/movies${movie.id}`, init)
// .then(res => res.json())
// .then(data => {
//   console.log(data);
      // setUsers([users, ...data]);
//   // nav('/watchList')
// })

// console.log(movie.watched)
// }