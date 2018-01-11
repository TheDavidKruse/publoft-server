exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('comments', (table) => {
        table.increments('id');
        table.integer('post_id').references('id').inTable('posts');
        table.integer('client_id').references('id').inTable('users');
        table.integer('writer_id').references('id').inTable('users');
        table.text('comment');
      });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
