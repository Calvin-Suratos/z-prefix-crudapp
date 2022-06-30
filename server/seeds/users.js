/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del();

  let usersArray = [
    {first_name: 'Calvin', last_name: 'Suratos', username: 'calvin-94', password: 'asdf', salt: ''},
    {first_name: 'Melvin', last_name: 'Suratos', username: 'melvin-94', password: 'jkl;', salt: ''},
    {first_name: 'Judy', last_name: 'Brewer', username: 'judy-97', password: '1234', salt: ''},
    {first_name: 'Erlynn', last_name: 'Suratos', username: 'erlynn-94', password: '6789', salt: ''},
    {first_name: 'Celso', last_name: 'Suratos', username: 'celso-68', password: 'qwer', salt: ''},
    {first_name: 'Merydith', last_name: 'Suratos', username: 'merydith-68', password: 'tyui', salt: ''},
    {first_name: 'Brian', last_name: 'Vergara', username: 'brian-95', password: 'zxcv', salt: ''},
    {first_name: 'Ariel', last_name: 'Vergara', username: 'ariel-99', password: 'mnvb', salt: ''},
  ];

  usersArray.forEach(el => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(el.password, salt);

    el.salt = salt;
    el.password = hash;
  });

  await knex('users').insert(usersArray);
};
