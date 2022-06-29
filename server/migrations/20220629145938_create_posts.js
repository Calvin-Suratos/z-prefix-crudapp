/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('posts', table => {
    table.increments();
    table.integer('users_id');
    table.foreign('users_id').references('users.id');
    table.string('title', 500).notNullable();
    table.string('content', 500).notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('posts', table => {
    table.dropForeign('users_id');
  })
  .then(() => {
    return knex.schema.dropTableIfExists('posts');
  });
};
