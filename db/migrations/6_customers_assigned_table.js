exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('customer_assignment', (table) => {
        table.increments('id');
        table.integer('writer_id').references('id').inTable('users');
        table.integer('customer_id').references('id').inTable('users');
      });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('customer_assignment');
};

