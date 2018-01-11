exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('helpful_files', (table) => {
        table.increments('id');
        table.integer('post_id').references('id').inTable('posts');
        table.string('url');
      });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('helpful_files');
};
