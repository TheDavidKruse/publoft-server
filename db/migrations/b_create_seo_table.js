exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('seo_post', (table) => {
        table.increments('id');
        table.integer('post_id').references('id').inTable('posts');
        table.string('keyword');
        table.string('original_keyword_rank');
        table.string('current_keyword_rank');
        table.string('SEO_audir');
        table.string('keyword_industry_analysis');
      });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('seo_post');
};
