exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('post_status', (table) => {
        table.increments('id');
        table.string('status');
      });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('post_status');
};
