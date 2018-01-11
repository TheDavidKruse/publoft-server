exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('clients', (table) => {
    table.increments('id');
    table.integer('client_id').references('id').inTable('users');
    table.string('company_name');
    table.string('contact_phone');
    table.boolean('keyword_industry_analysis').defaultTo(false);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('clients');
};