exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('casual_formal_scale', (table) => {
        table.increments('id');
        table.string('rating');
      });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('casual_formal_scale');
};
