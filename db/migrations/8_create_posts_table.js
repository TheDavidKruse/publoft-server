exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('posts', (table) => {
        table.increments('id');
        table.string('title');
        table.date('send_date');
        table.date('writer_due_date');
        table.date('eidtor_due_date');
        table.boolean('accepted_topic').defaultTo(false);
        table.integer('writer_id').references('id').inTable('users');
        table.integer('customer_id').references('id').inTable('users');
        table.integer('revenue_per_post');
        table.string('keyword');
        table.integer('post_status').references('id').inTable('post_status');
        table.string('internal_link_to_post');
        table.string('link_sent_to_customer');
        table.string('live_link');
        table.integer('overall_rating');
        table.integer('grammar_score');
      });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};

