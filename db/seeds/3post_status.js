
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('post_status').del()
    .then(function () {
      // Inserts seed entries
      return knex('post_status').insert([
        { status: 'no writer'},
        { status: 'being written'},
        { status: 'not used'},
        { status: 'written'},
        { status: 'edited'},
        { status: 'sent and unpaid'},
        { status: 'paid and done'},
      ]);
    });
};
