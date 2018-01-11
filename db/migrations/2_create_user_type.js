exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('user_type', (table) => {
        table.increments('id');
        table.string('type');
      });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_type');
};
