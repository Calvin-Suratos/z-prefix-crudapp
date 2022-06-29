/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {first_name: 'Calvin', last_name: 'Suratos', username: 'calvin-94', password: 'asdf'},
    {first_name: 'Melvin', last_name: 'Suratos', username: 'melvin-94', password: 'jkl;'},
    {first_name: 'Judy', last_name: 'Brewer', username: 'judy-97', password: '1234'},
    {first_name: 'Erlynn', last_name: 'Suratos', username: 'erlynn-94', password: '6789'},
    {first_name: 'Celso', last_name: 'Suratos', username: 'celso-68', password: 'qwer'},
    {first_name: 'Merydith', last_name: 'Suratos', username: 'merydith-68', password: 'tyui'},
    {first_name: 'Brian', last_name: 'Vergara', username: 'brian-95', password: 'zxcv'},
    {first_name: 'Ariel', last_name: 'Vergara', username: 'ariel-99', password: 'mnvb'},
  ]);
};
