exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('employees', (table) => {
        table.increments('id');
        table.integer('emp_id').references('id').inTable('users')
        table.string('link_to_linkedin');
        table.string('link_to_portfolio');
        table.string('link_to_blog');
        table.string('link_to_writing_samples');
      });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employees');
};
