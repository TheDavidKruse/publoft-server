
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customer_assignment').del()
    .then(function () {
      // Inserts seed entries
      return knex('customer_assignment').insert([
        {writer_id: 3, customer_id: 5},
        {writer_id: 3, customer_id: 6},
        {writer_id: null, customer_id: 7},
        {writer_id: null, customer_id: 8},
      ]);
    });
};
