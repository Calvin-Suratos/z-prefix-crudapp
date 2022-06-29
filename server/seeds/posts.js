/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('users').del()
  await knex('posts').del()
  await knex('posts').insert([
    {users_id: 1, title: 'Test 1', content:'Content 1'},
    {users_id: 1, title: 'Test 2', content:'content two'},
    {users_id: 2, title: 'test 3', content:'9320*&'},
    {users_id: 3, title: 'test 4', content:'DFJ)03'},
    {users_id: 4, title: '5', content:'E)(FD'},    
    {users_id: 5, title: '*(&', content:'random content'},   
    {users_id: 6, title: '#<KDF', content:'the quick brown fox jumped over the lazy river.'},
  ]);
};
