exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('users', (table) => {
        table.increments('id');
        table.string('first_name');
        table.string('last_name');
        table.string('email');
        table.string('password');
        table.integer('user_type').references('id').inTable('user_type');
        });
    };
    
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
    